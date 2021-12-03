const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLID
  } = graphql;

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

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        proyecto: {
            type: new GraphQLList(ProyectoType),

            resolve() {
                return Proyectos.find()
            },
        },



    }
});

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
              const Proyecto = new Proyecto({
                nombreProyecto: args.nombreProyecto,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                presupuesto: args.presupuesto,
                estadoAprobacion:args.estadoAprobacion,
                estadoActual:args.estadoActual,
                fase:args.fase
              });
              return await Proyectos.save();
            },
          },
    
    
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


