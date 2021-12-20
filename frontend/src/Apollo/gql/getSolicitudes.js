import { gql } from '@apollo/client'

const GET_SOLICITUDES = gql`
query find($lider: ID!
     
  
        listarSolicitudes(lider: $lider) {
       
          solicitud{
            usuarioId
            proyectoId
            fechaEgreso
            fechaIngreso
            estadoSolicitud
          }
        }
      
      
  }
    `;