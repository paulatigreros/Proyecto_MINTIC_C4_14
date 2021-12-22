import React from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom";

const ActualizarObservaciones = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Proyecto - observaciones</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID avance</h5></td>
                        <td class="Izquierda"><h3>"Aquí se llama el ID del avance"</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción</h5></td>
                        <td class="Izquierda"><h3>"Aqui se debe llamar la descripción"</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Observaciones</h5></td>
                        <td class="Izquierda"><input type="text" width= "500 px" heigth= "203 px" size="70" maxlength="500" name="Observaciones" /></td>
                    </tr>


                </table>


            </div>
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
    )
}

export default ActualizarObservaciones