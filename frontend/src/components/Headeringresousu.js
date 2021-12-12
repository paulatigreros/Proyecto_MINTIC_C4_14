import React from 'react';
import Agenda from '../assets/img/Agenda.png';
/* import {
    BrowserRouter as Router,
  
    Link
  } from "react-router-dom";
 */

const Headeringresousu = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Agenda} alt="" />
                <span>INGRESO/EDICIÓN DE USUARIO</span>
                {/* <Link to="Login">  */}<button id ="Cerrar" class="Cerrar">
                    Cerrar sesión
                </button>{/* </Link> */}
                <span id="Usuario" class="Usuario" >
                    Nombre de usuario activo (admin123)
                    
                </span>
            </div>
        </div>
        

    )
}

export default Headeringresousu