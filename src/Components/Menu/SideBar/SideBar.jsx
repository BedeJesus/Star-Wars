import { Link } from 'react-router-dom'
import './sidebar.css'
import { User, Book, Planet } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from "../../../App"

export default function Sidebar() {

    const { sideBar, showSideBar } = useContext(ThemeContext)


    return (
        <div className="sidebar">

            <div className='options'>

                <Link to='/characters' onClick={showSideBar}> <User size={20} className='user' />  Characters</Link>
                <Link to='/films' onClick={showSideBar}> <Book size={20} className='book' /> Films</Link>
                <Link to='/planets' onClick={showSideBar}> <Planet size={20} className='planet' /> Planets</Link>

            </div>

        </div>
    )
}