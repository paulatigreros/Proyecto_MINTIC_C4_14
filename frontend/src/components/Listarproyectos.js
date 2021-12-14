import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

const ListarProyectos = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Proyectos</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID Proyecto</h5></td>
                        <td><h5>Nombre</h5></td>
                        <td><h5>Líder</h5></td>
                        <td><h5>Estado aprobación</h5></td>
                        <td><h5>Estado actual</h5></td>
                        <td><h5>Fase</h5></td>
                        <td><h5>Acción</h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><select id="Aprobación" name="Aprobación">
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select></h5></td>
                        <td><h5><select id="estadoactual" name="estadoactual">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select></h5></td>
                        <td><h5><select id="fase" name="fase">
                            <option value="Iniciado">Iniciado</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Terminado">Terminado</option>
                        </select></h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><select id="Aprobación" name="Aprobación">
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select></h5></td>
                        <td><h5><select id="estadoactual" name="estadoactual">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select></h5></td>
                        <td><h5><select id="fase" name="fase">
                            <option value="Iniciado">Iniciado</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Terminado">Terminado</option>
                        </select></h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><select id="Aprobación" name="Aprobación">
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select></h5></td>
                        <td><h5><select id="estadoactual" name="estadoactual">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select></h5></td>
                        <td><h5><select id="fase" name="fase">
                            <option value="Iniciado">Iniciado</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Terminado">Terminado</option>
                        </select></h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><select id="Aprobación" name="Aprobación">
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select></h5></td>
                        <td><h5><select id="estadoactual" name="estadoactual">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select></h5></td>
                        <td><h5><select id="fase" name="fase">
                            <option value="Iniciado">Iniciado</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Terminado">Terminado</option>
                        </select></h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>

                    
                </table>

                <div class="acciones" align="center">
                    <tr>
                        <td><h5>
                            <button class="Guardar"> Guardar </button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar"> Atrás </button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar"> Crear nuevo proyecto </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
    )
}


export default ListarProyectos
