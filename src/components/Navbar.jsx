import React from 'react'

function Navbar() {
  return (
    <>
    <header>
        <nav>
            <a href="index.html" className="logo"><img src="img/corona-amarilla.png" alt=""/>
                <p>MERCELAND</p>
            </a>
            <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" className="icono-hamburguesa">
                <i className="fa-solid fa-bars"></i>
            </label>
            
            <ul className="nav-links">
                <li> <a href="index.html"><i className="fa-solid fa-house"></i> Inicio</a></li>
                <li><a href="html/catalogo.html"><i className="fa-solid fa-bag-shopping"></i> Catálogo</a></li>
                <li><a href="html/galeria.html"><i className="fa-solid fa-image"></i> Galería</a></li>
                <li><a href="html/contacto.html"><i className="fa-solid fa-phone"></i> Contacto</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar