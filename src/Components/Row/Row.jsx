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
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[9]}
                                description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker,but after de convertion to the dark side became Darth Vader'
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[16]}
                                description='Princess Leia is Luke´s sister, a great helper fot the Resistent rebelion against the Empire'
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[11]}
                                description='Han Solo was a human male smuggler. He became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire'
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[8]}
                                description='Chewbacca, known affectionately to his friends as Chewie, was a Wookiee male warrior, smuggler, mechanic, pilot, and friend of Han Solo'
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[22]}
                                description='Darth Sidious,known as the Emperor, was a Dark Lord of the Sith and Emperor of the Galactic Empire.He was the mentor of Darth Vader'
                                type={'character'} /></SwiperSlide>

                            <SwiperSlide><Card person={people[27]}
                                description='Yoda was a legendary Jedi Master who led the Jedi Order in the years leading up to its destruction by the Sith. He was the mentor of Luke Skywalker'
                                type={'character'} /></SwiperSlide>

                        </Swiper>

                    </div>

                    <h1>Main Terms</h1>
                    <div className='carousel'>

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={SetSlidesPerView()}
                            navigation={true}

                        >

                            <SwiperSlide><Card type={'term'}
                                term_name={'The Force'}
                                description='The Force is an energy field created by all life that connected everything in the universe. The Jedi and the Sith uses its power. Its an energy field created by all living things. It surrounds us and penetrates us, it binds the galaxy together. '
                            /></SwiperSlide>

                            <SwiperSlide><Card type={'term'}
                                term_name={'Jedi'}
                                description='A Jedi, also known by the title of Lord Jedi in ancient times, was a devotee to the ways of the Jedi Order, an ancient order of protectors united by their ability to harness the power of the Force. They use the power of the force for the good.'
                            /></SwiperSlide>

                            <SwiperSlide><Card type={'term'}
                                term_name={'Sith'}
                                description='The Sith, also referred to as the Sith Order, was an ancient religious order of Force-wielders devoted to the dark side of the Force. Driven by their emotions, including hate, anger, and greed, the Sith were deceptive and obsessed with gaining power no matter the cost. '
                            /></SwiperSlide>

                            <SwiperSlide><Card type={'term'}
                                term_name={'Lightsaber'}
                                description='The lightsaber was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.'
                            /></SwiperSlide>

                            <SwiperSlide><Card type={'term'}
                                term_name={'The Resistance '}
                                description='The Resistance was a private paramilitary force that opposed the First Order, a military dictatorship that sought to restore the Galactic Empire. It was founded by General Leia Organa and was modelled to an extent on the Alliance to Restore the Republic. '
                            /></SwiperSlide>

                            <SwiperSlide><Card type={'term'}
                                term_name={'The Republic'}
                                description='The Galactic Republic, also known as the Grand Republic or simply as the Republic, was a democratic union of sovereign star systems spread across light-years of space. Old Republic was a term affixed to the pre-modern Republic that existed until 1032 BBY.'
                            /></SwiperSlide>

                        </Swiper>

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