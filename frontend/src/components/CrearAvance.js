import React from 'react'
import Guardar from '../assets/img/Guardar.png';
import {Link} from "react-router-dom";

const CrearAvance = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Proyecto - Nuevo avance</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>Nombre del proyecto</h5></td>
                        <td class="Izquierda"><h3>"Aquí se llama el nombre del proyecto de acuerdo al ID"</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción del avance</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="500" name="Observaciones" /></td>
                    </tr>

                </table>

            

            </div>

            <div class="acciones" align="center">
                    <tr>
                        <td> <h5>
                            <button class="Guardar">
                                Guardar
                            </button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar">
                                Atrás
                            </button>
                        </h5></td>
                    </tr>


                </div>
        </div>
    )
}

export default CrearAvance
