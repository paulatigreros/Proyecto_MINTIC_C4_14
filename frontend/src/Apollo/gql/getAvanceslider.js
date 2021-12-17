import { gql } from '@apollo/client'

const GET_AVANCES_LIDER = gql`
query{
  
    listarAvanceslider{
        nombreProyecto
        avance {
          descripcion
          observacion
          proyectoId
          usuarioId
          fechaAvance
        }
        
    }
    
  }
    `;

export default GET_AVANCES_LIDER;