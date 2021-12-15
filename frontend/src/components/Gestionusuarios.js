import React from 'react'
import '../App.css'
import { useQuery } from '@apollo/client';
import Headergestusuarios from './Headergestusuarios';
import GET_USUARIOS from '../Apollo/gql/GetUsuarios'


const Gestionusuarios =() =>  {
    

        const { loading, data, error } = useQuery(GET_USUARIOS);
    
    
    
    
    
    return (

        <>
        {loading && <p>Cargando ...</p>}
        {error && <p>Se ha producido un error</p>}
        {
            data &&
        <div>
              <Headergestusuarios />  
                <div class="iconosVentas">
       
            
    </div>
    <div class="filtro">
        <span>Buscar</span>
            <input type="text" class="redondo"/>
    </div>
    <div class="divTabla">
        <table>
        <thead>
            <tr>
                {/* <th>Id Usuario</th> */}
                <th>Nombre</th>
                <th>Rol</th>
                <th>Correo</th>
                <th>Estado</th>
            </tr>
        </thead>

        <tbody>
            {
                data.listarUsuarios.map((usuario, index) => (

            <tr key={usuario.id}>
                <th scope="row">{index + 1}</th>
                {/* <td>{Usuario.id}</td> */}
                <td>{usuario.nombre}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.correo}</td>
{/*                 <td><select >
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                </select></td> */}
            </tr>
                ))
                }   
           </tbody>
        </table>

        <div align="center">
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