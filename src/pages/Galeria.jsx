import React from 'react'

function Galeria() {
  return (
    <>
    <div id="carouselExampleIndicators" className="contenedor-carrusel carousel slide" data-ride="carousel">
            <ol className="indicadores carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            </ol>
            <div className="carrusel-interno carousel-inner">
                <div className="carousel-item active">
                    <img className="foto d-block w-100" src="pompon-slider.jpeg" alt="First slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Pompón Madroño</h1>
                        <p>detalles coloridos</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="cintas-raso-slider.jpeg" alt="Second slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Cintas de Raso</h1>
                        <p>100% sintéticas</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="broderie-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Broderie de Algodón</h1>
                        <p>la mejor calidad</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="cierres-met-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Cierres Metálicos</h1>
                        <p>resistencia y elegancia</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="cierres-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Cierres Reforzados</h1>
                        <p>prácticos y económicos</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="hilos-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Hilos de Poliester</h1>
                        <p>para máquina familiar</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="hilo-algodon-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Hilo de Algodón</h1>
                        <p>tejidos con gancho</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="foto d-block w-100" src="hilo-bordar-slider.jpeg" alt="Third slide"/>
                    <div className="texto-de-foto carousel-caption d-none d-md-block">
                        <h1>Hilos para Bordar</h1>
                        <p>100% Algodón</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
    </div>
    </>
  )
}

export default Galeria