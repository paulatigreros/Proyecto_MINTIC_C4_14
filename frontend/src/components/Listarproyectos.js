import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'


const GET_PROYECTOS = gql`

query{
    listarProyectos {
        nombreProyecto
        objetivosGenerales
        objetivosEspecificos
        presupuesto
        estadoAprobacion
        estadoActual
        fase
        lider
        
        datoslider{
          
          nombre
        }
        avance{
            descripcion
            observacion
            proyectoId
        }
        solicitud{
            usuarioId
            fechaIngreso
            fechaEgreso
            estadoSolicitud
            proyectoId
        }
      }
      }
    `;



const ListarProyectos = () => {

    const { loading, data, error } = useQuery(GET_PROYECTOS);



    return (

        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&

        <div className='login2'>

            <div class="encabezado">
                <h5>Proyectos</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                <thead> 
                    <tr>
                        <td scope="col"><h5>ID Proyecto</h5></td>
                        <td scope="col"><h5>Nombre</h5></td>
                        <td scope="col"><h5>Líder</h5></td>
                        <td scope="col"><h5>Estado aprobación</h5></td>
                        <td scope="col"><h5>Estado actual</h5></td>
                        <td scope="col"><h5>Fase</h5></td>
                        <td scope="col"><h5>Acción</h5></td>
                    </tr>
                    </thead>
                    <tbody>

                        {
                    data.listarProyectos.map((Proyecto, index) => (
                        
                    <tr key={Proyecto.id} >
                        <td>{Proyecto.id}</td>
                        <td>{Proyecto.nombreProyecto}</td>
                        <td>{Proyecto.lider}</td>
                        <td><h5><select id="Aprobación" name="Aprobación">
                            <option>{Proyecto.estadoAprobacion}</option>
                            <option value="Aprobado">Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select></h5></td>
                        <td><h5><select id="estadoactual" name="estadoactual">
                        <option>{Proyecto.estadoActual} </option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select></h5></td>
                        <td><h5><select id="fase" name="fase">
                            <option> {Proyecto.fase} </option>                           
                            <option value="Iniciado">Iniciado</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Terminado">Terminado</option>
                        </select></h5></td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                    ))
                }
                    </tbody>
                    
                </table>

                <div class="acciones" align="center">
                    <tr>
                        <td><h5>
                            <button class="Guardar"> Guardar </button>
                        </h5></td>

                        <td><h5>
                            <button class="Guardar"><span><Link to="/CrearProyecto"> Crear nuevo proyecto</Link></span>  </button>
                        </h5></td>
                    </tr>


                </div>

            </div>
        </div>
                }
        </>

    )
}


export default ListarProyectos
