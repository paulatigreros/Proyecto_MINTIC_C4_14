const bcrypt = require("bcrypt");
const generarJwt = require("../helpers/jwt");
const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const Usuarios = require("../Models/Usuarios");
const Avances = require("../Models/Avances");
const Solicitudes = require("../Models/Solicitudes")

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


/* Proyectos */

const AvanceType = new GraphQLObjectType({
    name: "Avance",
    fields: () => ({
        descripcion: { type: GraphQLString },
        observacion: { type: GraphQLString },
        proyectoId: { type: GraphQLID }
    }),
})

const SolicitudType = new GraphQLObjectType({
    name: "Solicitud",
    fields: () => ({
        usuarioId: { type: GraphQLID },
        proyectoId: { type: GraphQLID },
        fechaIngreso: { type: GraphQLString },
        fechaEgreso: { type: GraphQLString },
        estadoSolicitud: { type: GraphQLBoolean }

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
        avance: {
            type: AvanceType,
            resolve(parents, args) {
                return Avance.findById(parent.proyectoId);
            },
        },
        solicitud: {
            type: SolicitudType,
            resolve(parents, args) {
                return Solicitud.findById(parent.proyectoId);
            }
        },
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

        listarAvances: {
            type: AvanceType,
            args: {
                proyectoId: { type: GraphQLID }
            },
            resolve(parents, { proyectoId }) {
                return Avances.find((proyectoId) => Avances.proyectoId === proyectoId);
            },
        },

        listarUsuarios: {
            type: new GraphQLList(UsuarioType),

            resolve() {
                return Usuarios.find()
            },
        },

        /* Validar usuario  ---paula*/
        ValidarUsuario: {
            type: UsuarioType,
            args: {
                password: { type: GraphQLString },
                correo: { type: GraphQLString }
            },
            resolve (parents, {correo, password}) {
                console.log(args); 
                const usuario=  usuarios.find((correo) => usuarios.correo === correo);
                
                
                /* Usuarios.find({
                   correo
                }) */
                if (!usuario) {
                    return "Usuario o contraseña incorrecto";
                }
                /* const validarPassword = bcrypt.compareSync(password, usuario.password)
                if (validarPassword) {
                    const token = await generarJwt(usuario.id, usuario.nombre)
                    return token;
                }
                else {
                    return "Usuario o contraseña incorrecto";
                } */
            },
        }
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
                    estadoAprobacion: args.estadoAprobacion,
                    estadoActual: args.estadoActual,
                    fase: args.fase
                });
                return await Proyecto.save();
            },
        },


        /* Agregar un nuevo Usuario */
        crearAvance: {
            type: AvanceType,
            args: {
                descripcion: { type: GraphQLString },
                observacion: { type: GraphQLString },
                proyectoId: { type: GraphQLID }
            },
            async resolve(parent, args) {
                console.log(args);
                const Avance = new Avances({
                    descripcion: args.descripcion,
                    observacion: args.observacion,
                    proyectoId: args.proyectoId,
                });
                return await Avance.save();
            },
        },

        /* Crear un nuevo Usuario --paula*/
        AgregarUsuario: {
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
                const salt = bcrypt.genSaltSync();
               /*  const password= bcrypt.hashSync(args.password, salt);  */
                const Usuario = new Usuarios({
                    nombre: args.nombre,
                    correo: args.correo,
                    estado: args.estado,
                    password: bcrypt.hashSync(args.password, salt), 
                    rol: args.rol,
                    proyectos_asignados: args.proyectos_asignadosestadoActual,                
                });

                return await Usuario.save();
            }
        },


        crearSolicitud: {
            type: SolicitudType,
            args: {
                usuarioId: { type: GraphQLID },
                proyectoId: { type: GraphQLID },
                fechaIngreso: { type: GraphQLString },
                fechaEgreso: { type: GraphQLString },
                estadoSolicitud: { type: GraphQLBoolean }
            },
            async resolve(parent, args) {
                console.log(args);
                const Solicitud = new Solicitudes({
                    usuarioId: args.usuarioId,
                    proyectoId: args.proyectoId,
                    fechaIngreso: args.fechaIngreso,
                    fechaEgreso: args.fechaEgreso,
                    estadoSolicitud: args.estadoSolicitud
                });
                return await Solicitud.save();
            },
        },



    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


