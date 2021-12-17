import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
query{
  
    listarUsuarios {
      id
      nombre
      password
      correo
      estado
      rol
    }
  }
    `;

export default GET_USUARIOS;