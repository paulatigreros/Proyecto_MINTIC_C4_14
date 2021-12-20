import { gql } from '@apollo/client'


const SET_CREARSOLICITUD  = gql`
    mutation setCrearSolicitud($proyectoId:ID! , $usuarioId:String!, $fechaIngreso: String!, $fechaEgreso: String!){            
        crearSolicitud(Solicitud : {
            proyectoId: $proyectoId,
            usuarioId: $usuarioId,
            fechaIngreso: $fechaIngreso,
            fechaEgreso: $fechaEgreso,
            estado:  $estado
        }) {
            proyectoId
            usuarioId
            fechaIngreso
            fechaEgreso
            estado
        }               
    }
`;

export default SET_CREARSOLICITUD ;

mutation{
    crearSolicitud(proyectoId:"61a9827af1c5402224b66b35",
      usuarioId:"61aba25112bf0ea71cc5e51c",fechaIngreso:"01/01/2022", fechaEgreso:"01/01/2023" ) {
      proyectoId
      usuarioId
      fechaIngreso
      fechaEgreso
      estado
    }}