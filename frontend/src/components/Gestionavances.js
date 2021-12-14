import React from 'react'
import '../App.css'


const Gestionavances = () => {
    return (
        <div className='login2'>

            <div class="encabezado">
                <h5>Avances - Líder</h5>
            </div>


            <div class="iconosVentas">

            </div>
            <div class="filtro">
                <span>Buscar</span>
                <input type="text" class="redondo" />
            </div>
            <div class="divTabla">
                <table>
                    <tr>
                        <th>Id Proyecto</th>
                        <th>Descripción</th>
                        <th>Fecha Avance</th>
                        <th>Estudiante</th>
                        <th>Observaciones</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><button class="Guardar">
                            Editar
                        </button></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><button class="Guardar">
                            Editar
                        </button></td>


                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><button class="Guardar">
                            Editar
                        </button></td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default Gestionavances
