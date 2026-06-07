import React from 'react'

function Cards({titulo, precio, imagen}) {
  return (
    <>
    <div className="card">
        <img src={imagen} alt={`Imagen de ${titulo}`}/>
        <div>
            <h3>{titulo}</h3>
            <p>${precio}</p>
        </div>
    </div>
    </>
  )
}

export default Cards