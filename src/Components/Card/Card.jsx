import { useState,useEffect } from 'react'
import './card.css'
import api from '../../utils/api'


export default function Card(props) {


    return (
        <>
            <div className="card">
                <p className='name'>{props.person.name}</p>
                <p> <span>Height:</span> {props.person.height}</p>
                <p> {props.description}</p>
                <p> <span>Home planet:</span>ainda n</p>

            </div>
        </>
    )
}


















