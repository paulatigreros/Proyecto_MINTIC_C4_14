import React from 'react';
import Producto from '../assets/img/Producto.png';
/* import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";
 */

const Headeractualizaravance = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Producto} alt="" />
                <span>ACTUALIZAR AVANCE</span>
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

export default Headeractualizaravance