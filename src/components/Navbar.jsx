import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar(){

    

    return (
        
        <div className="header">
           <p><span>Clarusway</span> Web Design</p>

            <ul>
                <li><NavLink 
                style={({ isActive }) => ({ color: isActive && '#A95088' })}
                className="home"
                to="/">HOME</NavLink></li>
                <li><NavLink 
                style={({ isActive }) => ({ color: isActive && '#A95088' })}
                className="about" 
                to="/About">ABOUT</NavLink></li>
                <li><NavLink
                style={({ isActive }) => ({ color: isActive && '#A95088' })}
                 className="services" 
                 to="/Services">SERVİCES</NavLink></li>

                
            </ul>

        </div>
       
    )
}

export default Navbar;