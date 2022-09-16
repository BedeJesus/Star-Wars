import './planets.css'
import { useEffect, useState, useRef } from 'react'
import api from '../../utils/api'



export default function Planets() {

    const [planets, setPlanets] = useState([])
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

                    await api.get(`/planets/${i}`).then((response) => {
                        setPlanets([...planets, planets.unshift(response.data)])

                        planets.sort(function (a, b) {
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
        <div className="planets">

            {loading ? (

                <>

                    <h1>Some Planets From the Saga</h1>
                    <div className='all_planets'>
            

                        {planets.map((planet) => (

                            <div className='planet_card'>
                                <h1>{planet.name}</h1>
                                <p> <span>Climate:</span> {planet.climate}</p>
                                <p> <span>Terrain:</span> {planet.terrain}</p>
                                <p> <span>gravity:</span> {planet.gravity}</p>
                                <p> <span>Population:</span> {planet.population}</p>
                                <p> <span>Rotation Pedriod:</span>{planet.rotation_period}h</p>
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