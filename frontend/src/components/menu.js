import React from 'react'
import Agregar from '../assets/img/Agregar.png';
import Logo from '../assets/img/logo_col_tech.png';
import {
    Link
  } from "react-router-dom";
export const Menu = () => {
    return (
        <div>

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
                <div id="name"><span>Gestión de proyectos UdeA</span></div>
            </div>
            <div id="menu-items">
                <div class="item">
                    <a href={() => false}>
                    
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        
                        <div class="title"><span><Link to="/DatosPersonales">Datos Personales</Link></span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                    
                        <div class="icon"><img src={Agregar} alt=""/></div>
                         
                        <div class="title"><span><Link to="/Gestionusuarios">Usuarios</Link></span></div>

                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        <div class="title"><span><Link to="/Listarproyectos">Proyectos</Link></span></div>
                    </a>
                </div> 
                <div class="item separator">

                </div>

                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        <div class="title"><span><Link to="/Gestionsolicitudes">Solicitudes</Link></span></div>
                    </a>
                </div> 
                <div class="item separator">

                </div>
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        <div class="title"><span><Link to="/ListarAvanceEstudiante">Avances - Estudiantes</Link></span></div>
                    </a>
                </div> 
                <div class="item separator">

                </div>

                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src={Agregar} alt=""/></div>
                        <div class="title"><span><Link to="/ListarAvancelider">Avances - Lider</Link></span></div>
                    </a>
                </div> 
                <div class="item separator">

                </div>


            </div>
        </div>
        </div>
    )
}

export default Menu