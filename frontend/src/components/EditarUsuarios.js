import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import Gestionusuarios from './Gestionusuarios';


const GET_USUARIOSBYID = gql`
query ListarUsuarios($id:String) {
    listarUsuariosporId (id: $id){
      id
      nombre
      password
      correo
      estado
      rol
    }
  }
    `;





const SET_USUARIO = gql`
        mutation ActualizarEstadoUsuario ($id:String, $estado: String){            
            AgregarUsuario(
                
                nombre: $id,
                password: $estado,
            ) {
                nombre
                password
                correo 
            }               
        }
    `;


const EditarUsuarios = ({ userid }) => {

    const { action } = useParams();

    { action === '' || action === undefined ? <Gestionusuarios /> : <EditarUsuarios userid={ action } />}
    console.log('userid', userid);

    const { loading, data, error } = useQuery(GET_USUARIOSBYID,{variables:{id:userid}});

    const navigate = useNavigate();

    const { register, handleSubmit} = useForm();

    /* var [AgregarUsuario, { data, loading, error }] = useMutation(SET_USUARIO)
    console.log({data}) */

    /* const handleCreate = (args) => {

        const {id,estado} = args;
        AgregarUsuario({ variables: { id,estado} });
        console.log({args})
    } */

    

    useEffect(()=> {
        if (data) {
            console.log('data', data);
            
            navigate('/', {
                replace: true
            })
        }
    }, [data])

    return (


        <form onSubmit={handleSubmit/* (handleCreate) */}>
            <div className='login2'>
                <div class="encabezado">
                    <h5>Editar usuario</h5>
                </div>

                <div class="divTabla">

                    <table id="tablaIngresoDatos">

                    <tr>
                            <td><h5>Id</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" value={data.listarUsuariosporId.id} placeholder="Id" {...register("id", {maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Nombre</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" value={data.listarUsuariosporId.nombre} placeholder="Nombre" {...register("nombre", {maxLength: 80 })} /></td>
                        </tr>


                        <tr>
                            <td><h5>Rol</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" value={data.listarUsuariosporId.rol} placeholder="rol" {...register("nombre", {maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Correo electrónico</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" value={data.listarUsuariosporId.correo} placeholder="Correo" {...register("correo", {})} />
                            </td>
                        </tr>

                        <tr>
                            <td><h5>Roles de usuario</h5></td>
                            <td class="Izquierda">
                                <select defaultvalue ={data.listarUsuariosporId.estado} {...register("rol", {})}>
                                    <option value="Administrador">Pendiente</option>
                                    <option value="Lider">Autorizado</option>
                                    <option value="Estudiante">No Autorizado</option>
                                </select>
                            </td>
                        </tr>


                        <div class="acciones" align="center">

                        <input type="submit" class="Guardar" />

                        <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                                    </button>

                        </div>

                    </table>



                </div>

            </div>

        </form>
    )
}

export default EditarUsuarios