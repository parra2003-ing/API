import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
          alt="Dragon Ball API"
        />
      </div>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/masculino">Masculino</Link>
        <Link to="/femenino">Femenino</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </div>
    </nav>
  );
};

export default NavBar;
