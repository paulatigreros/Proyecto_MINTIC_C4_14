import { gql } from '@apollo/client'

const SET_SOLICITUD = gql`
        mutation crearSolicitud($proyectoId: String, $usuarioId: String , $fechaIngreso: String ,$fechaEgreso: String) {            
            crearSolicitud(usuario : {
                proyectoId: $proyectoId
                usuarioId: $usuarioId
                fechaIngreso: $fechaIngreso
                fechaEgreso: $fechaEgreso
                estado: $estado
            }) {

            }               
        }
    `;

export default SET_SOLICITUD;

