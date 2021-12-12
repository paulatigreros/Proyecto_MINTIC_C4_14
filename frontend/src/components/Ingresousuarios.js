import React from 'react'
import '../App.css'
import Headeringresousu from './Headeringresousu';
const Ingresousuarios = () => {
    return (
        <div>
            <Headeringresousu/> 
            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="ID" /></td>
                    </tr>

                    <tr>
                        <td><h5>Nombre</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Roles de usuario</h5></td>
                        <td class="Izquierda"><select name="SeleccionRol">

                            <option>Administrador</option>

                            <option>Vendedor</option>

                        </select></td>
                    </tr>

                    <tr>
                        <td><h5>Estado del usuario</h5></td>
                        <td class="Izquierda">
                            <select name="SeleccionRol">

                                <option>Pendiente</option>

                                <option>Autorizado</option>

                                <option>No autorizado</option>

                            </select>
                        </td>
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

export default Ingresousuarios