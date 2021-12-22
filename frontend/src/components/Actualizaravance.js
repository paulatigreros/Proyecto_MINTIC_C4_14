import React from 'react'
import {
    Link
  } from "react-router-dom";



export const Actualizaravance = () => {
    return (
        <div>
           
           <div class="encabezado">
                <h5>Avances - Actualización </h5>
            </div>

            <div class="divTabla">
                
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID Avance</h5></td>
                        <td class="Izquierda"><h3>000004</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción de avance</h5></td>
                        <td class="Izquierda"><input type="text" size="80" maxlength="60" name="Descripcion" /></td>
                    </tr>

                    <tr>
                    <td><h5>Observación</h5></td>
                        <td class="Izquierda"><h3>No aprobada</h3></td>
                    </tr>

                    
                </table>

                <div class="acciones" align="center">
                <tr >
                        <td > <h5>
                            <button class="Guardar">
                                Guardar
                            </button>
                        </h5></td>
                        <td ><h5>
                            <button class="Guardar"><span><Link to="/IngresoProyecto">Atrás</Link></span>
                            </button>
                        </h5></td>
                    </tr>
                </div>

            </div>
        </div>
    )
}

export default Actualizaravance