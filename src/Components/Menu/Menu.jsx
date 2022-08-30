import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import './menu.css'


export default function Menu() {

    return (
        <div className='menu'>

            <h1>Star Wars </h1>

            <div className='buttons'>

                <Toggle/>
                <Link to ='/'>Characters</Link>
                <Link to ='/'>Story</Link>
                <Link to ='/'>Planets</Link>
                
                
            </div>
        </div>
    )
}











