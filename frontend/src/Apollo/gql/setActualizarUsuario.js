import { gql } from '@apollo/client'


const SET_ACTUALIZARUSUARIO  = gql`
    mutation setActualizarUsuario($usuarioId:ID! , $nombre:String!, $password:String!, $correo:String!){            
        ActualizarUsuarioPersonales(Usuario : {
            nombre:$nombre,
            password:$password,
            correo:$correo
        }) {
            id
            nombre
            correo
            password
        }               
    }
`;

export default SET_ACTUALIZARUSUARIO;