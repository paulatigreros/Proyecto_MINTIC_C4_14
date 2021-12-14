import React from 'react'
import '../App.css'

import Headergestsolicitud from './Headergestsolicitud';


const Gestionsolicitudes = () => {
    return (
        <div>
            <Headergestsolicitud />
            <div class="iconosVentas">


            </div>
            <div class="filtro">
                <span>Buscar</span>
                <input type="text" class="redondo" />
            </div>
            <div class="divTabla">
                <table>
                    <tr>
                        <th>Id Usuario</th>
                        <th>Id Proyecto</th>
                        <th>Fecha Ingreso</th>
                        <th>Fecha Egreso</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Aprobado</option>
                            <option>No Aprobado</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Aprobado</option>
                            <option>No Aprobado</option>
                        </select></td>

                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Aprobado</option>
                            <option>No Aprobado</option>
                        </select></td>
                    </tr>
                </table>

                <div align="center">
                    <h5>
                        <button class="Guardar">
                            Guardar
                        </button>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Gestionsolicitudes