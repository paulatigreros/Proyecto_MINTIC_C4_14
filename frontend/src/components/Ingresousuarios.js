import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

const Ingresousuarios = (props) => {

    /* const [crearUsuario] = useMutation(SET_USUARIO)

    var id = props.location.listProductos ?props.location.listProductos.productos.ID:"";
    var descripcion = props.location.listProductos ?props.location.listProductos.productos.Descripcion:"";
    var valorUnitario = props.location.listProductos ?props.location.listProductos.productos.ValorUnitario:"";
 */

    return (
        <div className='login2'>
            <div class="encabezado">
                <h5>Nuevo usuario</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>Nombre</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Roles de usuario</h5></td>
                        <td class="Izquierda"><select name="SeleccionRol">

                            <option>Administrador</option>

                            <option>Lider</option>

                            <option>Estudiante</option>

                        </select></td>
                    </tr>

                    <tr>
                        <td><h5>Correo electrónico</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Correo" /></td>
                    </tr>

                    <tr>
                        <td><h5>Contraseña</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Contraseña" /></td>
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
                            <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                            </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
    )
}

export default Ingresousuarios