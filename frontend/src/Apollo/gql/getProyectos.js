import { gql } from '@apollo/client'

const GET_PROYECTOS = gql`

query{
    listarProyectos {
      nombreProyecto
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      estadoAprobacion
      estadoActual
      fase
      lider
      avance{
          descripcion
          observacion
          proyectoId
      }
      solicitud{
          usuarioId
          fechaIngreso
          fechaEgreso
          estadoSolicitud
          proyectoId
      }
    }
    }
    `;

    export default GET_PROYECTOS;