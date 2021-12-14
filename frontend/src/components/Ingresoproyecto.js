import React from 'react'
import Headeringresoproyec from './Headeringresoproyec'

export const Ingresoproyecto = () => {
    return (
        <div>
             <div>
            <Headeringresoproyec />
            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>Nombre del proyecto</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Presupuesto</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" /></td>
                    </tr>



                    <tr>
                        <td><h5>Objetivos generales</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Correo" /></td>
                    </tr>

                    <tr>
                        <td><h5>Objetivos Especificos</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Contraseña" /></td>
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
        </div>
    )
}
export default Ingresoproyecto
