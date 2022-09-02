import { useEffect, useState } from 'react'
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

    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(false)
    const [sum, setSum] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            api.get(`/people/${i}`).then((response) => {
                setPerson([...person, {
                    data: response.data
                }])
            })
        }

        setLoading(true)


    }, [])


    function SetSlidesPerView() {
        if (window.innerWidth <= 1000) {
            return 2
        } else {
            return 4
        }
    }
    // fazer um for na api dos personagens e ir interando para armazenar todos os personagens em uma variavvel



    return (
        <div className='row'>

            {console.log(person)}
            

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
                            <SwiperSlide><Card person={person[0].data}
                                description='The main character od the saga,son of Anakin Skywalker with princess Padmé. Became a Jedi to fight the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={person[1].data}
                                description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={person[2].data}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={person[3].data}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={person[4].data}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                            /></SwiperSlide>

                            <SwiperSlide><Card person={person[5].data}
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