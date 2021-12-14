import React from 'react'
import Headeractualizaravance from './Headeractualizaravance'


export const Actualizaravance = () => {
    return (
        <div>
            <Headeractualizaravance/> 
            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID Avance</h5></td>
                        <td class="Izquierda"><h3>000004</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción de avance</h5></td>
                        <td class="Izquierda"><input type="text" size="80" maxlength="60" name="Descripcion" /></td>
                    </tr>

                    <tr>
                    <td><h5>Observación</h5></td>
                        <td class="Izquierda"><h3>No aprobada</h3></td>
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

export default Actualizaravance
