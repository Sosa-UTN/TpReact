import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <>
    <header>
        <nav>
            <Link to="/" className="logo"><img src="src/assets/corona-amarilla.png" alt=""/>
                <p>MERCELAND</p>
            </Link>
            <input type="checkbox" id="menu-toggle"/>
            <label htmlFor="menu-toggle" className="icono-hamburguesa">
                <i className="fa-solid fa-bars"></i>
            </label>
            
            <ul className="nav-links">
                <li><Link to="/"><FontAwesomeIcon icon="house" /> Inicio</Link></li>
                <li><Link to="/catalogo"><FontAwesomeIcon icon="bag-shopping" /> Catálogo</Link></li>
                <li><Link to="/galeria"><FontAwesomeIcon icon="image" /> Galería</Link></li>
                <li><Link to="/contacto"><FontAwesomeIcon icon="phone" /> Contacto</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar