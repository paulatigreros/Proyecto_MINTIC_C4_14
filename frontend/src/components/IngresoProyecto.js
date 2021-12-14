import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

const IngresoProyecto = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Proyecto</h5>
            </div>

            <div class="divTabla">

            <table id="tablaDatosProyecto">
                    <tr>
                        <td><h5>ID Proyecto</h5></td>
                        <td><h5>"Aquí se coloca ID proyecto"</h5></td>
                    </tr>

                    <tr>
                        <td><h5>Nombre de proyecto</h5></td>
                        <td><h5>"Aquí se coloca nombre proyecto"</h5></td>
                        <td><h5>Líder</h5></td>
                        <td><h5>"Aquí se coloca el lider proyecto"</h5></td>
                    </tr>

                    <tr>
                        <td><h5>Estado Aprobación</h5></td>
                        <td><h5>"Aquí se coloca el estado de aprobación del proyecto"</h5></td>
                        <td><h5>Presupuesto</h5></td>
                        <td><h5>"Aquí se coloca el presupuesto del proyecto"</h5></td>
                    </tr>

                    <tr>
                        <td><h5>Estado Actual</h5></td>
                        <td><h5>"Aquí se coloca el estado actual del proyecto"</h5></td>
                        <td><h5>Objetivo general</h5></td>
                        <td><h5>"Aquí se coloca el OG del proyecto"</h5></td>
                    </tr>

                    <tr>
                        <td><h5>Fase</h5></td>
                        <td><h5>"Aquí se coloca la fase del proyecto"</h5></td>
                        <td><h5>Objetivos específicos</h5></td>
                        <td><h5>"Aquí se colocan los OE del proyecto"</h5></td>
                    </tr>

                </table>

                <table id="tablaIngresoDatosAvance">
                    <tr>
                        <td><h5>Avances</h5></td>
                        <td><h5>Estudiante</h5></td>
                        <td><h5>Fecha de avance</h5></td>
                        <td><h5>Observaciones</h5></td>
                        <td><h5>Acción</h5></td>
                    </tr>

                    <tr>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5>DATO</h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
  
                </table>

                

                <div class="acciones" align="center">
                    <tr>
                        <td><h5>
                            <button class="Guardar"> <span><Link to="/Edicionproyectos">Actualizar datos del proyecto </Link></span></button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar"><span><Link to="/CrearAvance">Crear Avance </Link></span>  </button>
                        </h5></td>
                        <td><h5>
                            <button class="Guardar"><span><Link to="/Listarproyectos">Atrás </Link></span> </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
    )
}

export default IngresoProyecto