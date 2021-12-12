import React from 'react'
import '../App.css'
import Headergestproduct from './Headergestproduct';
/* import Agregar from '../assets/img/Agregar.png';
import Lapiz from '../assets/img/Lapis.png'; */
/* import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom"; */
  
const Gestionproductos =() =>{
    return (

        <div>
            <Headergestproduct />
        <div class="iconosVentas">
        <ul>
            <li>
            {/* <Link to="Ingresoproductos"><img src={Agregar} alt=""/></Link> */}
                <span>Nuevo Producto</span>
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                {/* <div class="title"><span><Link to="Ingresoproductos">Nuevo Producto</Link></span></div> */}
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                {/* <div class="title"><span><Link to="Ingresoproductos">Nuevo Producto</Link></span></div> */}

            </li>
        </ul>
            
    </div>
    <div class="filtro">
        <span>Filtro</span>
        <select class="redondo">
            <option value="">ID producto</option>
            <option value="">Descripcion</option>
        </select>
        <input type="text" class="redondo"/>
    </div>
    <div class="divTabla">
        <table>
            <tr>
                <th>Id Producto</th>
                <th>Nombre Producto</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresoproductos"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>

            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresoproductos"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <Link to="Ingresoproductos"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link> */}</td>
            </tr>
        </table>
    </div>
    </div>
    )
}

export default Gestionproductos