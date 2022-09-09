import './films.css'
import { useEffect, useState, useRef } from 'react'
import api from '../../utils/api'

export default function Films() {


    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const shouldLog = useRef(true)


    useEffect(() => {
        if (shouldLog.current) {
            async function getData() {
                shouldLog.current = false

                for (let i = 1; i <= 6; i++) {

                    await api.get(`/films/${i}`).then((response) => {
                        setFilms([...films, films.unshift(response.data)])

                    })
                }
                setLoading(true)
            }
            films.sort(function (a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

            });
            getData()

        }
    }, [])



    return (
        <div className="films">


            {loading ? (

                <>
                    <h1>All Films</h1>

                    <div className='all_films'>

                        {films.map((film) => (

                            <div className='film_card'>
                                <h1>{film.title}</h1>
                                <p> <span>Director:</span> {film.director}</p>
                                <p> <span>Resume:</span> {film.opening_crawl}</p>
                                <p> <span>Release Date:</span> {film.release_date}</p>
                            </div>
                        ))}

                    </div>

                </>

            ) : (
                <>
                    <h1 className='loading'>Loading!</h1>
                </>
            )
            }
        </div >
    )
}