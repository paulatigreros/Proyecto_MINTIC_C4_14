import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation AgregarUsuario($nombre: String, $password: String , $correo: String ,$rol: String) {            
            crearUsuario(usuario : {
                nombre: $nombre,
                password:$password
                correo:$correo,
                password: $password,
                rol: $rol
            }) {

            }               
        }
    `;

export default SET_USUARIO;