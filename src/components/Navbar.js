import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="nav-logo">
                    <img src="path/to/logo.png" alt="Logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre Mí</Link></li>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar; 