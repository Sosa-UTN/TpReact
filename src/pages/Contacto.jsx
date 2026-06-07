import React from 'react'

function Contacto() {
  return (
    <>
    <div className="flex-container">
            <form className="form-container" method="post">
                <h2>Contactanos para recibir atención personalizada</h2><br />
                
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>

                
                <input type="email" id="correo" name="correo" placeholder="Email"/>

               
                <input type="tel" id="telefono" name="telefono" placeholder="Teléfono"/>

                
                <textarea id="mensaje" name="mensaje" rows="4" cols="30"
                    placeholder="Escribe tu comentario aquí..."></textarea>

                
                <select id="opciones" name="opciones">
                    <option value="" disabled selected>Tipo de Compra</option>
                    <option value="mayorista">Mayorista</option>
                    <option value="minorista">Minorista</option>
                </select>

                
                <div className="radio-input-container">
                    <p>¿Ya nos conocías?</p>
                    <div>
                        <input type="radio" id="si" name="respuesta" value="s"/>
                        <label for="si">Sí</label>

                        <input type="radio" id="no" name="respuesta" value="n"/>
                        <label for="no">No</label>
                    </div>

                </div>

                
                <div className="checkbox-container">
                    <input type="checkbox" id="terminos" name="terminos"/>
                    <label for="terminos">Acepto los términos</label>
                </div>

                
                <div className="buttons-container">
                    <button className="enviar-form">Enviar Formulario</button>
                    <button className="limpiar-campos">Limpiar campos</button>
                </div>

            </form>
        </div>
    </>
  )
}

export default Contacto