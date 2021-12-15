import React from 'react'
import {
    Link, useNavigate
  } from "react-router-dom";
/* import Background from '../assets/img/Fondo.png' */

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();
    
        navigate('/Gestionusuarios', {
            replace: true
        })
        console.log('login');
    }

    return (
        <div className='login2'>
                 <body >
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <form onSubmit={handleLogin}>
                        <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input class="botones" type="submit" name="" value="Login" />
                        </form>
                        <Link to="/ingresousuarios"><input class="botones" type="submit" name="" value="Registrar Nuevo Usuario" /></Link>
                    </section>

                </body> 
        </div>

    );
}
export default Login