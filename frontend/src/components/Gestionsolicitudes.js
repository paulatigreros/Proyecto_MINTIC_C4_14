import React from 'react'
import '../App.css'

const Gestionsolicitudes = () => {
    return (
        <div className='login2'>
            
            <div class="encabezado">
                <h5>Solicitudes</h5>
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

                <div class="acciones" align="center">
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