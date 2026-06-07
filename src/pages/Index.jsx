import React from 'react'

function Index() {
  return (
    <>
        <div className="hero-section-div">
            <img src="herosection-1.png" alt="imagen" srcset=""/>
            <div>
                <p>Mercería Mayorista y Minorista</p>
            </div>
        </div>
        <div className="seccion-cards">
            <h1>¿Qué artículos ofrecemos?</h1>
            <div className="contenedor-cards">
                <div className="index-card">
                    <img src="cintas-raso-card.png" alt=""/>
                    <div>
                        <h2>Cintas de Raso</h2>
                        <p>Consegui cinta de industria argentina a precio de fabrica!</p>
                    </div>
                </div>
                <div className="index-card">
                    <img src="puntillas-broderie-card.png" alt=""/>
                    <div>
                        <h2>Puntillas y Guipures</h2>
                        <p>Artículos variados de excelente calidad.</p>
                    </div>
                </div>
                <div className="index-card">
                    <img src="pasamaneria-pompones-card.png" alt=""/>
                    <div>
                        <h2>Pasamanerías y Pompones</h2>
                        <p>Detalles coloridos para tus arreglos textiles.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Index