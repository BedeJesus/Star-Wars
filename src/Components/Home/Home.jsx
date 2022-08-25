import { useEffect, useState } from 'react'
import api from '../../utils/api'
import Card from '../Card/Card'
import './home.css'


export default function Home() {

    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        api.get(`/people`).then((response) => {
            setPerson(response.data)
            setLoading(true)
        })
    }, [])

 


    return (

        <div className='home'>
            {loading ? ( 
                <>
                   
                    <Card person={person.results[0]}
                        description='É o personagem principal da saga,filho de Darth vader com a princesa Padmé Amidala ' />

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













