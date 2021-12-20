import { gql } from '@apollo/client'

const LOGIN_USUARIO = gql`
        query signin($correo: String!, $password: String!){            
            login(correo: $email, password: $password) {
                token
                usuario
                rol
            }     
        }
    `;

export default LOGIN_USUARIO;