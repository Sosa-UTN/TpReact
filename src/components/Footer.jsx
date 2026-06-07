import React from 'react'

function Footer() {
  return (
    <>
    <footer>
        <div className="footer-container">
            <div className="footer-div">
                <h3>LOCAL</h3>
                <p>Visitanos en nuestro local en... </p>
                <p>No dudes en escribirnos a nuestro whatsapp para cualquier consulta.</p>
            </div>
            <div className="footer-div">
                <h3>HORARIOS</h3>
                <p>Nuestros horarios de atención son:<br />Lun a Vie de 9hs a 17hs.<br />Sáb de 10hs a 14hs.</p>
            </div>
            <div className="footer-div redes-div">
                <h3>REDES Y CONTACTO</h3>
                <ul>
                    <li> <a href="index.html"><i className="fa-solid fa-house"></i> Inicio</a></li>
                    <li><a href="html/catalogo.html"><i className="fa-solid fa-bag-shopping"></i> Catálogo</a></li>
                    <li><a href="html/galeria.html"><i className="fa-solid fa-image"></i> Galería</a></li>
                    <li><a href="html/contacto.html"><i className="fa-solid fa-phone"></i> Contacto</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Merceland - Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer