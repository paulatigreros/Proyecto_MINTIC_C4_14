import React from 'react'
import {
    Link
  } from "react-router-dom";
/* import Background from '../assets/img/Fondo.png' */

function Login() {
    return (
        <div className='login2'>
                 <body >
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input class="botones" type="submit" name="" value="Ingresar" />
                        <Link to="/ingresousuarios"><input class="botones" type="submit" name="" value="Registrar Nuevo Usuario" /></Link>
                    </section>

                </body> 
        </div>

    );
}
export default Login