import React from 'react';
import {Link} from "react-router-dom";
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import LOGIN_USUARIO from '../Apollo/gql/login';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Login() {

    const auth = useAuth();
    const navigate = useNavigate();
    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    
    function handleOnsubmit(e){
    e.prevent.default();

    const email = e.target.Correo.value
    const password = e.target.password.value
    console.log(email)

    loginUsuario({ variables: { email, password } });

}



    

    useEffect(() => {
        if (data) {
            console.log('data', data);
            
            auth.setToken(data.login.token);
            auth.setUser({ usuario: data.login.usuario, rol: data.login.rol });

            navigate('/Gestionusuarios', {
                replace: true
            })
        }
    }, [data, navigate, auth]);



    return (
        <div className='login2'>
                
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <form onSubmit= {handleOnsubmit} >
                        <input class="controles" type="text" id="Correo" name="Correo" placeholder="Usuario" />
                        <input class="controles" type="password" id="password" name="password" placeholder="Contraseña" />
                        <button class="botones" type="submit" name="" value="Ingresar" />
                        </form>
                        <Link to="/Ingresousuarios"><input class="botones" type="submit" name="" value="Registrar Nuevo Usuario" /></Link>
                    </section>

                
        </div>

    );
}
export default Login