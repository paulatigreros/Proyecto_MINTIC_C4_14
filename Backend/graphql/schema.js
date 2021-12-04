const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const Usuarios = require("../Models/Usuarios");
const Avances= require("../Models/Avances");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLID
  } = graphql;

/* Schemas para emplear */  
const AvanceType = new GraphQLObjectType({
    name: "Avance",
    fields: () => ({
        avance: { type: GraphQLString },
        observacion: { type: GraphQLString }, 
        proyecto: {type: GraphQLID}          
    }),
})




  const ProyectoType = new GraphQLObjectType({
    name: "Proyecto",
    fields: () => ({
        nombreProyecto: { type: GraphQLString },
        objetivosGenerales: { type: GraphQLString },
        objetivosEspecificos: { type: GraphQLString },
        presupuesto: { type: GraphQLInt },
        estadoAprobacion: { type: GraphQLString },
        estadoActual: { type: GraphQLString },
        fase: { type: GraphQLString },
        avance:{
        type : AvanceType,
            resolve(parents,args){
                return Avances.findById(parent.proyectoId);
            }
    },
       
                
    }),
})

const UsuarioType = new GraphQLObjectType({
    name: "Usuario",
    fields: () => ({
        nombre: { type: GraphQLString },
        password: { type: GraphQLString },
        correo: { type: GraphQLString },
        estado: { type: GraphQLInt },
        rol: { type: GraphQLString },
        proyectos_asignados: { type: GraphQLString },            
    }),
})



const IntegranteType = new GraphQLObjectType({
    name: "Integrantes",
    fields: () => ({
        usuario: {
            type: UsuarioType,
            resolve(parents, args) {
                return Usuarios.findById(parents.usuario.id)
            }
        },
        estado: { type: GraphQLString },

        fechaIngreso: { type: GraphQLString },

        fechaEgreso: { type: GraphQLString }

    })
})

/* Consulta del proyecto */

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        listarProyectos: {
            type: new GraphQLList(ProyectoType),

            resolve() {
                return Proyectos.find()
            },
        },



    }
});

/* Metodos para actualizar y crear datos */

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        generarSolicitud: {
            type: ProyectoType,
            args: {
                    usuario: { type: GraphQLID },
                    estado: { type: GraphQLString },
                    fechaIngreso: { type: GraphQLString },
                },
        
            async resolve(parent, args) {
                return await Proyectos.findByIdAndUpdate(args.id, {
                    usuario: args.usuarioId,
                    estado: args.estado,
                    fechaIngreso: args.fechaIngreso,
                }, {
                    new: true
                })
            },
        },
        /* Agregar un nuevo Proyecto */
        agregarProyecto: {
            type: ProyectoType,
            args: {
                nombreProyecto: { type: GraphQLString },
                objetivosGenerales: { type: GraphQLString },
                objetivosEspecificos: { type: GraphQLString },
                presupuesto: { type: GraphQLInt },
                estadoAprobacion: { type: GraphQLString },
                estadoActual: { type: GraphQLString },
                fase: { type: GraphQLString },
            },
            async resolve(parent, args) {
              console.log(args);
              const Proyecto = new Proyectos({
                nombreProyecto: args.nombreProyecto,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                presupuesto: args.presupuesto,
                estadoAprobacion:args.estadoAprobacion,
                estadoActual:args.estadoActual,
                fase:args.fase
              });
              return await Proyecto.save();
            },
          },
            /* Agregar un nuevo Usuario */
        agregarUsuario: {
            type: UsuarioType,
            args: {
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
                estado: { type: GraphQLInt },
                rol: { type: GraphQLString },
                proyectos_asignados: { type: GraphQLString },  
            },
            async resolve(parent, args) {
              console.log(args);
              const Usuario = new Usuarios({
                nombre: args.nombre,
                password: args.password,
                correo: args.correo,
                estado: args.estado,
                rol:args.rol,
                proyectos_asignados:args.proyectos_asignadosestadoActual,
              });
              return await Usuario.save();
            },
          },

            /* Agregar un nuevo Usuario */
          crearAvance: {
            type: AvanceType,
            args: {
                avance: { type: GraphQLString },
                observacion: { type: GraphQLString }, 
                proyecto: {type: GraphQLID}  
            },
            async resolve(parent, args) {
              console.log(args);
              const Avance = new Avances({
                avance: args.avance,
                observacion: args.observacion,
                proyecto: args.proyecto,

              });
              return await Avance.save();
            },
          },

    
    
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


