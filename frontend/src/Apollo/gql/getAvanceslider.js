import { gql } from '@apollo/client'

const GET_AVANCES_LIDER = gql`
query signin($lider: String!
  
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