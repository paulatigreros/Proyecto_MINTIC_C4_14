import React from 'react';
import Persona from '../assets/img/persona_mas.png';
/* import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom"; */


const Headergestusuarios = () => {
  /*   const titleadd = e =>  { 
        const { handletitle }=e.target 
    } */
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Persona} alt="" />
                <span>GESTION DE USUARIOS</span>
                {/* <Link to="Login"> */}<button id ="Cerrar" class="Cerrar">
                    Cerrar sesión
                </button>{/* </Link> */}
                <span id="Usuario" class="Usuario" >
                    Nombre de usuario activo (admin123)
                </span>
            </div>
        </div>

    )
}

export default Headergestusuarios