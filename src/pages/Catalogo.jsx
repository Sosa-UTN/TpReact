import React from 'react'
import Card from '../components/Cards'; 
import { productos } from '../data/productos';

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
            {/* Bucle de cards de productos*/}
            {productos.map((producto) => (
                <Card 
                    key= {producto.id}
                    titulo= {producto.titulo}
                    precio= {producto.precio}
                    imagen= {producto.imagen}
                />
            ))}
        </div>
    </>
  )
}

export default Catalogo