import React from 'react'
import Headergestventas from './Headergestventas';
/* import Agregar from '../assets/img/Agregar.png';
import Editar from '../assets/img/Editar.png'; */
import Guardar from '../assets/img/Guardar.png';
/* import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom"; */

function gestionventas() {
    return (

        <div >
            <Headergestventas />
            <div class="iconosVentas">
                <ul>
                    <li>

                    {/* <Link to="Ingresoventas"><img src={Agregar} alt=""/></Link> */}
                        <span>Nueva Venta</span>

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div class="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div class="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}
                    </li>
                    <li>
                    {/* <Link to="Ingresoventas"><img src={Editar} alt=""/></Link> */}
                        <span>Editar Venta</span>
                    </li>
                    <li>
                    <img src={Guardar} alt=""/> 
                        <span>Guardar Venta</span>
                    </li>
                </ul>

            </div>
            <div class="filtro">
                <span>Filtro</span>
                <select class="redondo">
                    <option value="">ID producto</option>
                    <option value="">Descripcion</option>
                </select>
                <input type="text" class="redondo" />
            </div>
            <div class="divTabla">
                <table>
                    <tr>
                        <th>Id Venta</th>
                        <th> Fecha de venta</th>
                        <th>Cliente</th>
                        <th>Total Venta</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                </table>
            </div>

            
        </div>

    )
}

export default gestionventas
