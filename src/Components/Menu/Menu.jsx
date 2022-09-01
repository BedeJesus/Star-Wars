import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import './menu.css'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import Sidebar from './SideBar/SideBar'


export default function Menu() {

    const [sideBar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)



    return (
        <div className='menu'>

            <h1>Star Wars</h1>

            <div className='buttons'>

                <Toggle />
                <Link to='/'>Characters</Link>
                <Link to='/'>Story</Link>
                <Link to='/'>Planets</Link>

            </div>

            <div className='sub-menu'>
                <div className='toggle'>
                    <Toggle />
                </div>

                {sideBar ? (
                    <>
                        <button onClick={showSideBar}><X size={40} /></button>
                        <Sidebar />
                    </>
                ) : (
                    <button onClick={showSideBar}><List size={40} /></button>
                )}
                
            </div>
        </div>
    )
}











