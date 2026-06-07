import React from 'react'

function Catalogo() {
  return (
    <>
    <div className="barra-superior">
            <div className="buscador">
                <i className="lupa fa-solid fa-magnifying-glass"></i>
                <input type="text" name="Buscador" placeholder="Buscar"/>
            </div>
            <div className="selector-categoria">
                <select id="opciones" name="opciones">
                    <option value="todos">Todos los productos</option>
                    <option value="hilos">Hilos</option>
                    <option value="agujas y alfileres">Agujas y Alfileres</option>
                </select>
            </div>
        </div>
        <div className="contenedor-grilla">
            <div className="card">
                <img src="../img/hilo-azp-500y.jpg" alt=""/>
                <div>
                    <h3>Hilo AZP 500yds x 12u</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/hilo-azp-2000y.jpg" alt=""/>
                <div>
                    <h3>Hilo AZP 2000yds x 3u</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/hilo-azp-4000mts.jpg" alt=""/>
                <div>
                    <h3>Hilo AZP 4000mts x 2u</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/alfileres-azp-2.jpg" alt=""/>
                <div>
                    <h3>Alfileres Rueda AZP x 12u</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/hilo-algodón-judith.jpg" alt=""/>
                <div>
                    <h3>Hilo de Algodón Judith 100g</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/Agujas-mod-cbx.jpg" alt=""/>
                <div>
                    <h3>Agujas Modista CBX x 25u</h3>
                    <p>$1000</p>
                </div>
            </div>
            <div className="card">
                <img src="../img/canastita-grande-1.jpg" alt=""/>
                <div>
                    <h3>Canastita de Agujas</h3>
                    <p>$1000</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Catalogo