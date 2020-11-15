import React from 'react'
import Icofont from 'react-icofont'
import { NavLink } from 'react-router-dom'
// import AddHospital from '../Hospitals/AddHospital'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav pl-2 w-100">
                <li className="nav-item">
                    <NavLink className="nav-link text-light" exact to="/"><Icofont icon="test-bulb" className="nav-icons"/> Hopitals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/reviews"><Icofont icon="book" className="nav-icons"/> Reviews</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/about"><Icofont icon="teacher" className="nav-icons"/> About</NavLink>
                </li>
            </ul>

         
        </nav> 
    )
}

export default NavBar
