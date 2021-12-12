import React from 'react';
import Producto from '../assets/img/Producto.png';
/* import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";
 */

const Headeringresoproduc = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Producto} alt="" />
                <span>INGRESO/EDICIÓN DE PRODUCTOS</span>
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

export default Headeringresoproduc