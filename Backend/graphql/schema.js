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
    name:"Proyectos",
        fields:() => ({
            nombreProyecto:{ type: GraphQLString},
            objetivosGenerales:{type: GraphQLString},
            objetivosEspecificos:{type: GraphQLString},
            presupuesto:{type: GraphQLInt},
            estadoAprobacion:{type: GraphQLInt},
            estadoActual:{type: GraphQLInt},
            fase:{type: GraphQLInt},

        })


})

const UsuarioType = new GraphQLObjectType({
    name:"Usuarios",
        fields:() => ({
            nombre:{ type: GraphQLString},
            contraseña:{type: GraphQLString},
            correo:{type: GraphQLString},
            estado:{type: GraphQLInt},
            rol:{type: GraphQLInt},
            proyectos_asignados:{
                type:ProyectoType, 
                resolve(parents,args){
                    return Proyectos.findById(parents.profesor.Id)
                }

            }

        })


})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields:{
        proyecto:{
            type: ProyectoType,
            args: {
            nombreProyecto:{
                type:GraphQLString
            } ,

        },
        resolve(parents, args){
            return Proyectos.find(args.id)
        },
    },



}
});


module.exports = new GraphQLSchema({
    query: RootQuery,
  });

