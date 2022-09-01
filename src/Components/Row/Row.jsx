import { useEffect, useState, useRef } from 'react'
import api from '../../utils/api'
import Card from '../Card/Card'
import './row.css'
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Row() {

    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(false)
    const [person2, setPerson2] = useState({})
    const carousel = useRef(null)

    useEffect(() => {
        api.get(`/people`).then((response) => {
            setPerson(response.data)
        })

        api.get(`/people/?page=2`).then((response) => {
            setPerson2(response.data)
            setLoading(true)
        })

    }, [])


    return (
        <div className='row'>


            {loading ? (
                <>
                    <h1>Main Characters</h1>
                    <div className='carousel'>

                        <Card person={person.results[0]}
                            description='The main character od the saga,son of Anakin Skywalker with princess Padmé. Became a Jedi to fight the Empire'
                        />

                        <Card person={person.results[3]}
                            description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                        />

                        <Card person={person.results[4]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />

                        <Card person={person2.results[3]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />

                        <Card person={person2.results[2]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />

                        <Card person={person2.results[8]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />

                        <Card person={person2.results[8]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />

                        <Card person={person2.results[8]}
                            description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                        />


                    </div>

                    <div className="buttons">
                        <button><ArrowLeft /></button>
                        <button><ArrowRight /></button>
                    </div>
                </>

            ) : (
                <>
                    <h1>Carregando!</h1>
                </>
            )

            }

        </div>
    )
}