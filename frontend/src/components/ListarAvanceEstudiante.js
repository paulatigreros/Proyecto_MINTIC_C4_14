import React from 'react'
import '../App.css'
import {
    Link
  } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_AVANCES_ESTUDIANTE = gql`
query{
        listarAvancesEstudiante{
           proyectoId
          descripcion
          fechaAvance
          observacion
          
      }
  }
    `;

const ListarAvanceEstudiante = () => {
    
    const { loading, data, error } = useQuery(GET_AVANCES_ESTUDIANTE);

   
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
                        <td scope="col"><h5>Descripción</h5></td>
                        <td scope="col"><h5>Fecha de avance</h5></td>
                        <td scope="col"><h5>Observaciones</h5></td>
                        <td scope="col"><h5>Acciones</h5></td>
                    </tr>
                </thead>

                <tbody>
                    {

                    data.listarAvancesEstudiante.map((Avance, index) => (  
                    <tr key={Avance.id}>
                        <td>{Avance.proyectoId}</td>
                        <td>{Avance.descripcion}</td>
                        <td>{Avance.fechaAvance}</td>
                        <td>{Avance.observacion}</td>
                        <td><h5><button class="Guardar"><span><Link to="/ActualizarObservaciones">ir</Link></span></button></h5></td>
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



export default ListarAvanceEstudiante