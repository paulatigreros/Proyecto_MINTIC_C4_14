import React from 'react'
import '../App.css'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'
import { Link } from "react-router-dom";

const GET_SOLICITUDES = gql`
query find($lider: ID!
     
  
        listarSolicitudes(lider: $lider) {
       
          solicitud{
            usuarioId
            proyectoId
            fechaEgreso
            fechaIngreso
            estadoSolicitud
          }
        }
      
      
  }
    `;




const Gestionsolicitudes = ({lider}) => {

    const { loading, data, error } = useQuery(GET_SOLICITUDES,{ variables: {lider} });


    return (

        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&


                <div className='login2'>

                    <div class="encabezado">
                        <h5>Solicitudes</h5>
                    </div>


                    <div class="filtro">
                        <span>Buscar</span>
                        <input type="text" class="redondo" />
                    </div>

                    <div class="divTabla">
                        <table>

                            <thead>
                                <tr>
                                    <th scope="col">Id Usuario</th>
                                    <th scope="col">Id Proyecto</th>
                                    <th scope="col">Fecha Ingreso</th>
                                    <th scope="col">Fecha Egreso</th>
                                    <th scope="col">Estado</th>
                                </tr>

                            </thead>

                            <tbody>
                                {
                                    data.listarSolicitudes.map((Solicitud, index) => (
                                        <tr key={Solicitud.id}>
                                            <td>{Solicitud.usuarioId}</td>
                                            <td>{Solicitud.proyectoId}</td>
                                            <td>{Solicitud.fechaIngreso}</td>
                                            <td>{Solicitud.fechaEgreso}</td>
                                            <td><select >
                                                <option>{Solicitud.estadoSolicitud}</option>
                                                <option>Pendiente</option>
                                                <option>Aprobado</option>
                                                <option>No Aprobado</option>
                                            </select></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div class="acciones" align="center">
                            <h5>
                                <button class="Guardar">
                                    Guardar
                                </button>
                            </h5>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}

export default Gestionsolicitudes