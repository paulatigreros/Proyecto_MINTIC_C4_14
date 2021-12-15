import React from 'react'
import '../App.css'
import GET_USUARIOS from '../Apollo/gql/getUsuarios'
import { useQuery } from '@apollo/client';


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
                                    <th>Id Usuario</th>
                                    <th>Nombre</th>
                                    <th>Rol</th>
                                    <th>Correo</th>
                                    <th>Estado</th>
                                </tr>

                            </thead>
                            <tbody>

                                {


                                    data.listarUsuarios.map((usuario, index) => (
                                        <tr key={usuario._id}>
                                            {/* <td>{usuario._id}</td> */}
                                            <td>{usuario.nombre}</td>
                                            <td>{usuario.rol}</td>
                                            <td>{usuario.correo}</td>
                                            {/* <td><select >
                                                <option>Pendiente</option>
                                                <option>Autorizado</option>
                                                <option>No Autorizado</option>
                                            </select></td> */}
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
