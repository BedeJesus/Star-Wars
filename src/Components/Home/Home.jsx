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
            <h1>Home</h1>
            <h2>{person.name}</h2>
            <input type= 'number' value={choice} onChange={e => setChoice(e.target.value)}></input>
        </div>
    )
}













