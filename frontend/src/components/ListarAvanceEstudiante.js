import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

const ListarAvanceEstudiante = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Avances - Estudiante</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID Proyecto</h5></td>
                        <td><h5>Descripción</h5></td>
                        <td><h5>Fecha de avance</h5></td>
                        <td><h5>Observaciones</h5></td>
                        <td><h5>Acciones</h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                    
                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                </table>


                </div>

            </div>
        </div>
    )
}



export default ListarAvanceEstudiante
