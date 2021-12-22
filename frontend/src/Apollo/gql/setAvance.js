import { gql } from '@apollo/client'

const SET_AVANCE = gql`
        mutation crearAvance($proyectoId: String, $descripcion: String ) {            
            crearAvance(usuario : {
                proyectoId: $proyectoId
                descripcion: $usuarioId
            }) {

            }               
        }
    `;

export default SET_AVANCE;

