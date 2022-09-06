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
            async function getData() {
                shouldLog.current = false

                for (let i = 1; i <= 30; i++) {

                    if (i === 17) {
                        i++ //api doesnt have the 17º character
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

                    <h1>Main Characters</h1>
                    <div className='carousel'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={SetSlidesPerView()}
                            navigation={true}

                        >

                            <SwiperSlide><Card person={people[18]}
                                description='The main character od the saga,son of Anakin Skywalker with princess Padmé. Became a Jedi to fight the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[9]}
                                description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[16]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[11]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[8]}
                                description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[22]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={people[27]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>



                        </Swiper>

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