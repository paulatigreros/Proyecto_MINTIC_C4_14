import { gql } from '@apollo/client'

const GET_AVANCES_ESTUDIANTE = gql`
query{
  
    
        listarAvancesEstudiante{
           proyectoId
          descripcion
          fechaAvance
          observacion
          
      }
    
    
  }
    `;

export default GET_AVANCES_ESTUDIANTE;