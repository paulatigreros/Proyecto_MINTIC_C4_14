import React from 'react'
import Agregar from '../assets/img/Agregar.png';
import Logo from '../assets/img/logo_col_tech.png';
import '../App.css';
/* import {
    BrowserRouter as Router,
 
    Link
  } from "react-router-dom"; */


function menu() {
    return (
        <div id="sideMenu" className="menu-expanded">
            <div id="header">
                <div id="title"></div>
                <div id="menuBtn">
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                </div>
            </div>
            <div id="profile">
                <div id="photo">{/* <Link to="Login"> */}<img src={Logo} alt=""/>{/* </Link></ */}div>
                <div id="name"><span>Perfil</span></div>
            </div>
            <div id="menu-items">
                <div class="item">
                    <a href={() => false}>
                    
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        {/* <div class="title"><span>Gestión de usuarios</span></div> */}
                        <div class="title"><span>{/* <Link to="Gestionusuarios"> */}Gestión usuarios{/* </Link> */}</span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                    
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        {/* <div class="title"><span>Gestión de productos</span></div> */} 
                        <div class="title"><span>{/* <Link to="Gestionproductos"> */}Gestión productos{/* </Link> */}</span></div>

                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        <div class="title"><span>{/* <Link to="Gestionventas"> */}Gestión ventas{/* </Link> */}</span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default menu
