import { gql } from '@apollo/client'

const SET_PROYECTO = gql`
        mutation agregarProyecto($nombreProyecto: String, $objetivosGenerales: String , $objetivosEspecificos: String ,$presupuesto: String) {            
            agregarProyecto(proyecto : {
                nombreProyecto: $proyectoId
                objetivosGenerales: $usuarioId
                objetivosEspecificos: $fechaIngreso
                presupuesto: $fechaEgreso
                estadoAprobación: 'Pendiente'
                estadoActual: 'Inactivo'
                fase: ''
                lider: context.uid
            }) {

            }               
        }
    `;

export default SET_PROYECTO;

