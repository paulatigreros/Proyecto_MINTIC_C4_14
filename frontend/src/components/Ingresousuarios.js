import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'




const SET_USUARIO = gql`
        mutation crearUsuario ($nombre: String, $rol: String , $correo: String, $password: String){            
            AgregarUsuario(
                
                nombre: $nombre,
                password: $password,
                correo: $correo,
                rol: $rol
            ) {
                nombre
                password
                correo 
            }               
        }
    `;


const Ingresousuarios = () => {

    const navigate = useNavigate();

    const { register, handleSubmit} = useForm();

    const [AgregarUsuario, { data, loading, error }] = useMutation(SET_USUARIO)
    console.log({data})

    const handleCreate = (args) => {

        const { nombre, rol, correo, password} = args;
        AgregarUsuario({ variables: { nombre, rol, correo, password} });
        console.log({args})
    }

    

    useEffect(()=> {
        if (data) {
            console.log('data', data);
            
            navigate('/PantallaInicio', {
                replace: true
            })
        }
    }, [data])

    return (


        <form onSubmit={handleSubmit(handleCreate)}>
            <div className='login2'>
                <div class="encabezado">
                    <h5>Nuevo usuario</h5>
                </div>

                <div class="divTabla">

                    <table id="tablaIngresoDatos">

                        <tr>
                            <td><h5>Nombre</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="Nombre" {...register("nombre", {maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Roles de usuario</h5></td>
                            <td class="Izquierda">
                                <select {...register("rol", {})}>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Lider">Lider</option>
                                    <option value="Estudiante">Estudiante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><h5>Correo electrónico</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="Correo" {...register("correo", {})} />
                            </td>
                        </tr>

                        <tr>
                            <td><h5>Contraseña</h5></td>
                            <td class="Izquierda"><input type="text" size="70" placeholder="Contraseña" {...register("password", {})} /></td>
                        </tr>

                        <div class="acciones" align="center">

                        <input type="submit" class="Guardar" />

                        <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                                    </button>

                        </div>

{/*                         <div class="acciones" align="center">
                            <tr >
                                <td > <h5>
                                    <button class="Guardar">
                                        Guardar
                                    </button> */}


                                {/* </h5></td>

                                <td ><h5>
                                    <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                                    </button>
                                </h5></td>
                            </tr> */}




                        {/* </div> */}
                    </table>



                </div>

            </div>

        </form>
    )
}

export default Ingresousuarios