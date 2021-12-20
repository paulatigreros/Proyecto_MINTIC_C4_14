import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_AVANCES_LIDER = gql`
query signin($lider: String!
  
    listarAvanceslider{
        nombreProyecto
        avance {
          descripcion
          observacion
          proyectoId
          usuarioId
          fechaAvance
        }
        
    }
    
  }
    `;

const ListarAvancelider = () => {
    
    const { loading, data, error } = useQuery(GET_AVANCES_LIDER);
    
    return (

        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&

        <div className='login2'>

            <div class="encabezado">
                <h5>Avances - Estudiante</h5>
            </div>

            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <thead>
                    <tr>
                        <td scope="col"><h5>ID Proyecto</h5></td>
                        <td scope="col"><h5>Nombre Proyecto</h5></td>
                        <td scope="col"><h5>ID Usuario</h5></td>
                        <td scope="col"><h5>Descripción</h5></td>
                        <td scope="col"><h5>Observaciones</h5></td>
                        <td scope="col"><h5>Fecha de avance</h5></td>
                        <td><h5>Acciones</h5></td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                    data.listarAvanceslider.map((Proyectos, index) => (  
                    <tr key={Proyectos.id}>
                        <td>{Proyectos.proyectoId}</td>
                        <td>{Proyectos.nombreProyecto}</td>
                        <td>{Proyectos.usuarioId}</td>
                        <td>{Proyectos.descripcion}</td>
                        <td>{Proyectos.observacion}</td>
                        <td>{Proyectos.fechaAvance}</td>
                        <td><h5><button class="Guardar">Ir</button></h5></td>
                    </tr>
                    ))
                    }
                    </tbody>
                </table>


                </div>

            </div>
            }


            </>
    )
}



export default ListarAvancelider
