import React from 'react'
import '../App.css'
import { useQuery } from '@apollo/client';
import GET_USUARIOS from '../Apollo/gql/getUsuarios' 

const Gestionusuarios = () => {

    const { loading, data, error } = useQuery(GET_USUARIOS);

    const handleDelete = (id) => {
        console.log('delete');
    }

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
                                    data.listarUsuarios.map((Usuario, index) => (
                                        <tr key={Usuario._id}>
                                            <td>{Usuario._id}</td>
                                            <td>{Usuario.Nombre}</td>
                                            <td>{Usuario.Rol}</td>
                                            <td>{Usuario.Correo}</td>
                                            <td><select >
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