import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <header>
        <nav>
            <Link to="/" className="logo"><img src="src/assets/corona-amarilla.png" alt=""/>
                <p>MERCELAND</p>
            </Link>
            <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" className="icono-hamburguesa">
                <i className="fa-solid fa-bars"></i>
            </label>
            
            <ul className="nav-links">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Inicio</Link></li>
                <li><Link to="/catalogo"><i className="fa-solid fa-bag-shopping"></i> Catálogo</Link></li>
                <li><Link to="/galeria"><i className="fa-solid fa-image"></i> Galería</Link></li>
                <li><Link to="/contacto"><i className="fa-solid fa-phone"></i> Contacto</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar