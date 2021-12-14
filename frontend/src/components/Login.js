import React from 'react'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className='login2'>
                
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input class="botones" type="submit" name="" value="Ingresar" />
                        <Link to="/Ingresousuarios"><input class="botones" type="submit" name="" value="Registrar Nuevo Usuario" /></Link>
                    </section>

                
        </div>

    );
}
export default Login