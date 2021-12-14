import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";
  
const DatosPersonales = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Datos Personales - Actualización</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID</h5></td>
                        <td class="Izquierda"><h3>"Aquí se llama el ID del usuario"</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Nombre</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="500" name="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Correo</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="500" name="Correo" /></td>
                    </tr>

                    <tr>
                        <td><h5>Contraseña</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="500" name="Contraseña" /></td>
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
                            <button class="Guardar">
                                Atrás
                            </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
    )
}


export default DatosPersonales