import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import './menu.css'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import Sidebar from './SideBar/SideBar'
import { ThemeContext } from "../../App"
import { useContext } from 'react'


export default function Menu() {

    const {sideBar,showSideBar} = useContext(ThemeContext)



    return (
        <div className='menu'>

            <Link to='/' className='star_wars'>Star Wars</Link> 

            <div className='buttons'>

                <Toggle />
                <Link to='/characters'>Characters</Link>
                <Link to='/films'>Films</Link>
                <Link to='/planets'>Planets</Link>

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











