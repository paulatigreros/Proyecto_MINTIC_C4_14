import React from 'react'
import {
    Link
  } from "react-router-dom";


export const CrearProyecto = () => {
    return (
        <div className='login2'>
             <div class="encabezado">
                <h5>Proyecto - Nuevo proyecto</h5>
            </div>
            
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

                <div class="acciones" align="center">
                <tr >
                        <td > <h5>
                            <button class="Guardar">
                                Guardar
                            </button>
                        </h5></td>
                        <td ><h5>
                            <button class="Guardar"><span><Link to="/ListarProyectos">Atrás</Link></span>
                            </button>
                        </h5></td>
                    </tr>

                </div>

            </div>
        </div>
        
    )
}
export default CrearProyecto