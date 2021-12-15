import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($nombre: String!, $apellido: String!, $email: String!, $password: String!, $rol: String!) {            
            crearUsuario(usuario : {
                nombre: $nombre,
                apellido: $apellido,
                email: $email,
                password: $password,
                rol: $rol
            }) {
                id
                nombre
                apellido
                email 
            }               
        }
    `;

export default SET_USUARIO;