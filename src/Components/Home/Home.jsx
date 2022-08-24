import { useEffect, useState } from 'react'
import api from '../../utils/api'
import styles from './Home.module.css'


export default function Home(){

    const [person,setPerson] = useState({})
    const [choice,setChoice] = useState(0)
    

    useEffect(() => {
        api.get(`/people/${choice}`).then((response) => {
            setPerson(response.data)
        })
    }, [choice])


    return(
        <div className={styles.home}>
            <h1>Personagens</h1>
        </div>
    )
}













