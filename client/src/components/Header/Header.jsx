import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css';
import logoGh from '../../assets/images/logo/github-logo.png';

const Header  = () => {
  
  return (
    <header>
      <img src="" alt="" />
      <nav className="NavLink">
        
        <Link to="/home"> Accueil</Link>
        <Link to="/about" className="About" > A propos</Link>
        <Link to="/contact" className="Contact" >Contact</Link>
        <Link to="https://github.com/delahocheemmanuel" target="_blank" rel="noopener noreferrer">
          <img src={logoGh}alt="" ></img>
        </Link>
      </nav>
    </header>

  );
}

export default Header;
