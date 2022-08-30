import { useEffect, useState,useRef } from 'react'
import api from '../../utils/api'
import Card from '../Card/Card'
import './home.css'
import { ArrowLeft, ArrowRight } from "phosphor-react";



export default function Home() {

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

    const handleLeftClick = (e) =>{
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidht

    }

    const handleRightClick = (e)=>{
        e.preventDefault()
        console.log(carousel.current.offsetWidht)
        carousel.current.scrollLeft -= carousel.current.offsetWidht


    }


    return (

        <div className='home'>
            {loading ? (
                <>
                    <div className='carousel' ref={carousel}>


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
                        <button onClick={handleLeftClick}><ArrowLeft /></button>
                        <button onClick={handleRightClick}><ArrowRight /></button>
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













