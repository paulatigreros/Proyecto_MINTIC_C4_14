import { gql } from '@apollo/client'

const LOGIN_USUARIO = gql`
        query ($correo: String, $password: String){            
            ValidarUsuario(correo: $correo, password: $password) {
                token
                usuario
                rol
            }     
        }
    `;

export default LOGIN_USUARIO;