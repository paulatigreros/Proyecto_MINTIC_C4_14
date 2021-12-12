import React from 'react';
import '../App.css';
import Headeringresoproduc from './Headeringresoproduc';
const Ingresoproductos = () => {
    return (
        <div>
            <Headeringresoproduc/> 
            <div class="divTabla">
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID</h5></td>
                        <td class="Izquierda"><h3>000004</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción de producto</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Valor Unitario</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="IDVendedor" /></td>
                    </tr>

                    <tr>
                        <td><h5>Estado</h5></td>
                        <td class="Izquierda">
                            <select name="Estado">
                                <option>Disponible</option>
                                <option>No Disponible</option>
                            </select>
                        </td>
                    </tr>
                </table>

                <div align="center">
                    <h5>
                        <button class="Guardar">
                            Guardar
                        </button>
                    </h5>
                </div>

            </div>
        </div>
    )
}

export default Ingresoproductos