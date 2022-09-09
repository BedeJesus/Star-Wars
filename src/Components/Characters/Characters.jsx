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

                for (let i = 1; i <= 30; i++) {

                    if (i === 17) {
                        i++ //api doesnt have the 17 character
                    }

                    await api.get(`/people/${i}`).then((response) => {
                        setPeople([...people, people.unshift(response.data)])
                    })

                    await api.get(`/planets/${i}`).then((response) => {
                        setPeople([...people,{
                           homeworld: response.data.name}])
                    })
                }
                setLoading(true)
            }

            people.sort(function (a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

            })
            getData()
        }
    }, [])





    return (
        <div className="characters">

            {loading ? (

                <>

                    <h1>Some Characters From the Saga</h1>

                    <div className='all_characters'>

                        {people.map((person) => (

                            <div className='character_card'>
                                <h1>{person.name}</h1>
                                <p> <span>Gender:</span> {person.gender}</p>
                                <p> <span>Height:</span> {person.height}</p>
                                <p> <span>Mass:</span> {person.mass}</p>
                                <p> <span>Skin Color: </span> {person.skin_color}</p>
                                <p> <span>Hair Color: </span>{person.hair_color}</p>
                            </div>
                        ))}

                    </div>

                </>

            ) : (
                <>
                    <h1 className='loading'>Loading!</h1>
                </>
            )}
        </div>
    )




}