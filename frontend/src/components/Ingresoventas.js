import React from 'react'
import '../App.css'
import Headeringresoventas from './Headeringresoventas';
import Agregar from '../assets/img/Agregar.png';
import Quitar from  '../assets/img/Quitar.png';
const Ingresoventas = () => {
    return (
        <div>
            <Headeringresoventas/> 
            <div class="divFiltros">
                <ul>
                    <li>Fecha de venta <input type="date" name="fechaVenta" /></li>
                </ul>
                <ul>
                <li>
                Identificación <input type ="text" name="cliente" id="cliente" class ="txtNit"/>
                Cliente<input type ="text" name="cliente" id="cliente" class ="txtCliente"/>
                </li>
                </ul>
                <ul>
                <li>
                <select>
                <option>Descripcion de producto</option>
                <option>Producto 1</option>
                <option>Producto 2</option>
                </select>
                </li>
                <li>Cantidad <input type ="text" name="cantidad" id="cantidad"/></li>
                <li>
                <img src={Agregar} alt=""/>
                </li>
                </ul>
                </div>

                <div class ="divTablaventas">
                <table>
                <tr>
                <th>Producto ID</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Valor unitario</th>
                <th>Valor total</th>
                <th>Acción</th>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                </table>
                <div class ="labelTotal">
                <label class ="txtCliente">TOTAL VENTAS</label>
                </div>
                <div class ="labelTotal2">
                <button class ="btnGuardarVentas">Guardar
                </button>
                </div>

                </div>
            </div>
     )
}

export default Ingresoventas