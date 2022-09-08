import './characters.css'
import { useEffect, useState, useRef } from 'react'
import api from '../../utils/api'



export default function Characters() {

    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const shouldLog = useRef(true)


    useEffect(() => {
        if (shouldLog.current) {
            async function getData() {
                shouldLog.current = false

                for (let i = 1; i <= 5; i++) {

                    if (i === 17) {
                        i++ //api doesnt have the 17 character
                    }

                    await api.get(`/people/${i}`).then((response) => {
                        setPeople([...people, people.unshift(response.data)])

                        people.sort(function (a, b) {
                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

                        });
                    })
                }
                setLoading(true)
            }
            getData()
        }
    }, [])


    



    return (
        <div className="characters">

            {loading ? (

                <>
                
                    <h1>All Characters</h1>

                    <div className='all_characters'>

                        {people.map((person) => (

                            <div className='character_card'>
                                <h1>{person.name}</h1>
                                <p> <span>Gender:</span> {person.gender}</p>
                                <p> <span>Height:</span> {person.height}</p>
                                <p> <span>Mass:</span> {person.mass}</p>
                                <p> <span>Skin Color:</span> {person.skin_color}</p>
                                <p> <span>Home World:</span> Tatoine</p>
                            </div>
                        ))}

                    </div>

                </>

            ) : (
                <>
                    <h1>Loading!</h1>
                </>
            )}
        </div>
    )




}