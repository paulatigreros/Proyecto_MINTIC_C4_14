import { gql } from '@apollo/client'


const SET_ACTUALIZARESTADOUSUARIO  = gql`
    mutation setActualizarEstadoUsuario($usuarioId:ID! , $estado:String!){            
        ActualizarEstado(Usuario : {
            nombre:$nombre,
            estado:$estado
        }) {
            nombre
            estado
        }               
    }
`;

export default SET_ACTUALIZARESTADOUSUARIO ;