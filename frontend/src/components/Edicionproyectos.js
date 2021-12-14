import React from 'react'
import Headeredicionproyec from './Headeredicionproyec'

export const Edicionproyectos = () => {
    return (
        <div>
              <Headeredicionproyec/> 
            <div class="divTablaEdi">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td ><h5>ID Proyecto </h5></td>
                        <td class="Izquierda"><h3>000004</h3></td>


                    </tr>

                    <tr>
                        <td><h5>Nombre Proyecto</h5></td>
                        <td class="Izquierda"><input type="text" size="50" maxlength="60" name="IDVendedor" /></td>
                        <td><h5>Lider</h5></td>
                        <td class="Izquierda"><h3>Carlos Rodriguez</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Estado Aprobación</h5></td>
                        <td class="Izquierda"><h3>Aprobado</h3></td>
                        <td><h5>Presupuesto</h5></td>
                        <td class="Izquierda"><input type="text" size="50" maxlength="60" name="IDVendedor" /></td>
                    </tr>

                    <tr>
                    <td><h5>Estado Actual</h5></td>
                        <td class="Izquierda"><h3>Activo</h3></td>
                        <td><h5>Objetivo General</h5></td>
                        <td class="Izquierda"><input type="text" size="50" maxlength="60" name="IDVendedor" /></td>
                    </tr>

                    <tr>
                    <td><h5>Fase</h5></td>
                        <td class="Izquierda"><h3>En desarrollo</h3></td>
                        <td><h5>Objetivo Especifico </h5></td>
                        <td class="Izquierda"><input type="text" size="50" maxlength="60" name="IDVendedor" /></td>
                    </tr>


                </table>

                <div align="center">
                    <h5>
                        <button class="guardar">
                            Guardar
                        </button>
                    </h5>
                </div>

            </div>

            
        </div>
    )
}

export default Edicionproyectos
