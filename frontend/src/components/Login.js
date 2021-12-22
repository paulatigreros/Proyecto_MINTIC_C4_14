import React from 'react';
import { Link } from "react-router-dom";
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { gql } from '@apollo/client'
import '../App.css'
import { useForm } from 'react-hook-form';




const LOGIN_USUARIO = gql`
        query login ($correo: String!, $password: String!){            
            ValidarUsuario(correo: $correo, password: $password) 
            {
                token
                rol
                id
            }     
        }
    `;



function Login() {

    const auth = useAuth();
    const navigate = useNavigate();
    const [ValidarUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);


    const handleLogin = (args) => {

        const { correo, password } = args;
        ValidarUsuario({ variables: { correo, password } });
        console.log(correo)
        console.log(password)

    }

    /*    function handleOnsubmit(e){
       e.prevent.default();
   
       const correo = e.target.Correo.value
       const password = e.target.password.value
       console.log(correo)
   
       loginUsuario({ variables: { correo, password } });
   
   } */


    const { register, handleSubmit, formState: { errors } } = useForm();



    useEffect(() => {
        if (data) {
            console.log('data', data);
            console.log(data.ValidarUsuario.token)

            auth.setToken(data.ValidarUsuario.token);
            auth.setUser({ rol: data.ValidarUsuario.rol });

            navigate('/PantallaInicio',
               
            )
        }
    }, [data, navigate, auth]);



    return (

        

        <div className='login2'>




            <section class="login">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso de Usuario</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                            <input
                                class="controles"
                                type="text"
                                placeholder="correo"
                                name="correo"
                                {...register("correo", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>



                        <div className="form-group mt-2">
                            <input
                                class="controles"
                                type="password"
                                placeholder="password"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>


                        <div className="form-group mt-3">
                            <input
                                class="botones"
                                type="submit"

                                value="Login"
                            />

                        </div>
                    </form>
                    {error && <div className="alert alert-danger" role="alert">
                        Usuario no Autorizado o contraseña incorrecta
                    </div>}
                    <Link to="/Ingresousuarios"><input class="botones" type="submit" name="" value="Registrar Nuevo Usuario" /></Link>


                </div>

            </section>

        </div>






    );
}
export default Login