import React from 'react'
import '../App.css'


const Gestionusuarios = () => {
    return (
        <div className='login2'>


            <div class="encabezado">
                <h5>Usuarios</h5>
            </div>

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
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Correo</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select></td>

                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select >
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
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

export default Gestionusuarios
