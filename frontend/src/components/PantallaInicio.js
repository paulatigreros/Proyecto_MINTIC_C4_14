import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const PantallaInicio = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Bienvenido!</h5>
            </div>

            <div class="divTabla">

                <table id="tablaDatosProyecto">
                    <tr>
                        <td><h5>Gestor de Proyectos Udea</h5></td>
                        <td><h5>"En este espacio encontrarás los proyectos liderados en nuestra universidad. 
                            Como usuario podrás crear tu perfil y solicitar la participación en proyectos de tu área de interés
                            ¡Tu conocimiento, motivación y aporte son clave para obtener los resultados!"</h5></td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default PantallaInicio