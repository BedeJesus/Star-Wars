import { useEffect, useState, useRef } from 'react'
import api from '../../utils/api'
import Card from '../Card/Card'
import './row.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Row() {

    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)

    const shouldLog = useRef(true)


    useEffect(() => {
        if (shouldLog.current) {
            shouldLog.current = false
            
            for (let i = 1; i <= 20; i++) {
                api.get(`/people/${i}`).then((response) => {
                    setPeople([...people, people.unshift(response.data)])

                    people.sort(function (a, b) {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                        
                    });
                    // CONTINUAR: https://www.youtube.com/watch?v=8yU3OVVsC7k

                })
            }
            setLoading(true)
        }
    }, [])

    function SetSlidesPerView() {
        if (window.innerWidth <= 1000) {
            return 2
        } else {
            return 4
        }
    }

    return (
        <div className='row'>

            {console.log(people)}


            {loading ? (
              
                <>

                    {console.log(loading)}

                    <h1>Main Characters</h1>
                    <div className='carousel'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={SetSlidesPerView()}
                            navigation={true}

                        >



                            <SwiperSlide><Card person={people[0]}
                                description='The main character od the saga,son of Anakin Skywalker with princess Padmé. Became a Jedi to fight the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[5]}
                                description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[10]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[7]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>


                        </Swiper>

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