import React from 'react'
import '../App.css'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
query{
  
    listarUsuarios {
      id
      nombre
      password
      correo
      estado
      rol
    }
  }
    `;


const Gestionusuarios = () => {

    const { loading, data, error } = useQuery(GET_USUARIOS);



    return (

        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&


                <div className='login2'>


                    <div class="encabezado">
                        <h5>Usuarios</h5>
                    </div>

                    <div class="iconosVentas">


                    </div>
                    <div class="filtro">
                        <span>Buscar</span>
                        <input type="text" class="redondo" />
                    </div>
                    <div class="divTabla">
                        <table>

                            <thead>

                                <tr>
                                    {/* <th scope="col">Id Usuario</th> */}
                                    <th scope="col">Nombre</th>
                                    <th scope="col" >Rol</th>
                                    <th scope="col">Correo</th>
                                    <th>Estado</th>
                                </tr>

                            </thead>
                            <tbody>

                                {


                                    data.listarUsuarios.map((Usuario, index) => (
                                        <tr key={Usuario.id}>
                                            {/* <td>{usuario._id}</td> */}
                                            <td>{Usuario.nombre}</td>
                                            <td>{Usuario.rol}</td>
                                            <td>{Usuario.correo}</td>
                                            <td><select >
                                                <option>{Usuario.estado}</option>
                                                <option>Pendiente</option>
                                                <option>Autorizado</option>
                                                <option>No Autorizado</option>
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

export default Gestionusuarios
