import React from 'react'
import "./Footer.css";
import logo from '../img/clarusway_logo.png';

const Footer = () => {
    return (
        
        <div className="footer">
            <p>Clarusway Web Design, Copyright © {new Date().getFullYear()}</p>
            <img src={logo} alt="" className="footer-img" />
        </div>
        
    )
}

export default Footer