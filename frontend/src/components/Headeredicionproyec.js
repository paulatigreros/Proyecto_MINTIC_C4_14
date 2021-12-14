import React from 'react'
import Agenda from '../assets/img/Agenda.png';
import {Link} from "react-router-dom";

export const Headeredicionproyec = () => {
    return (
        <div>
                    <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Agenda} alt="" />
                <span>EDICIÓN DE PROYECTO</span>
                <Link to="/"><button id ="Cerrar" class="Cerrar">
                    Cerrar sesión
                </button></Link>
                <span id="Usuario" class="Usuario" >
                    Nombre de usuario activo (admin123)
                </span>
            </div>
        </div>
            
        </div>
    )
}
export default Headeredicionproyec