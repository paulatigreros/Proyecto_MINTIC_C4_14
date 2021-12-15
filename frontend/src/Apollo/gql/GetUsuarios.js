import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
query{
  
  
    listarUsuarios {
      nombre
      password
      correo
      estado
      rol
      proyectos_asignados
    }
  }
    `;

export default GET_USUARIOS;