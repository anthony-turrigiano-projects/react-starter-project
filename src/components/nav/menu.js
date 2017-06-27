import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
    <ul className="navigation__menu nav navbar-nav navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>        
    </ul>    
)

export default NavMenu;