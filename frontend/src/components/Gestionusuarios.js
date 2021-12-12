import React from 'react'
import '../App.css'
/* import Editar from '../assets/img/Editar.png'; */
/* import Agregar from '../assets/img/Agregar.png'; */
import Headergestusuarios from './Headergestusuarios';
/* import Lapiz from '../assets/img/Lapis.png'; */

/* import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom"; */

const Gestionusuarios =() =>  {
    return (
        <div>
              <Headergestusuarios />  
                <div class="iconosVentas">
        <ul>
            <li>

            {/* <Link to="Ingresousuarios"><img src={Agregar} alt=""/></Link> */}
                <span>Nuevo Usuario</span>

                {/* <img src="Imagenes/Agregar.png" alt=""> */}
               {/*  <div class="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div> */}

                {/* <img src="Imagenes/Agregar.png" alt=""> */}
              {/*   <div class="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div> */}
            </li>
            
        </ul>
            
    </div>
    <div class="filtro">
        <span>Buscar</span>
            <input type="text" class="redondo"/>
    </div>
    <div class="divTabla">
        <table>
            <tr>
                <th>Id Usuario</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>
            </tr>
        </table>
    </div>
        </div>
    )
}

export default Gestionusuarios
