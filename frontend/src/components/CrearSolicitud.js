import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

const CrearSolicitud = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Solicitudes - Crear solicitud</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>Nombre del proyecto</h5></td>
                        <td class="Izquierda"><h3>"Aquí se llama el nombre del proyecto de acuerdo al ID"</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Fecha de Ingreso</h5></td>
                        <td class="Izquierda"><input type="date" step="1" min="2021-10-01" max="2022-12-31" name="fecha Ingreso" /></td>
                    </tr>

                    <tr>
                        <td><h5>Fecha de Egreso</h5></td>
                        <td class="Izquierda"><input type="date" step="1" min="2021-10-01" max="2022-12-31" name="fecha Egreso" /></td>
                    </tr>

                </table>

                <div class="acciones" align="center">
                    <tr>
                        <td> <h5>
                            <button class="Guardar">
                                Guardar
                            </button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar"><span><Link to="Gestionsolicitudes">Solicitudes</Link></span>
                            </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
    )
}

export default CrearSolicitud