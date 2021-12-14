import React from 'react';
import Persona from '../assets/img/persona_mas.png';
import {Link} from "react-router-dom";


const Headergestsolicitud = () => {
  /*   const titleadd = e =>  { 
        const { handletitle }=e.target 
    } */
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Persona} alt="" />
                <span>GESTION DE SOLICITUDES</span>
                <Link to="/"><button id ="Cerrar" class="Cerrar">
                    Cerrar sesión
                </button></Link>
                <span id="Usuario" class="Usuario" >
                    Nombre de usuario activo (admin123)
                </span>
            </div>
        </div>

    )
}

export default Headergestsolicitud