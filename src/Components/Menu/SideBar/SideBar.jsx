import { Link } from 'react-router-dom'
import './sidebar.css'
import { User,Book,Planet} from 'phosphor-react'


export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className='options'>

                <Link to='/'> <User size={20} className='user'/>  Characters</Link>
                <Link to='/'> <Book size={20} className='book'/> Story</Link>
                <Link to='/'> <Planet size={20} className='planet'/> Planets</Link>

            </div>

        </div>
    )
}