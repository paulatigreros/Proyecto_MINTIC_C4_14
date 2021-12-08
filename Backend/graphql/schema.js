const bcrypt = require("bcrypt");
const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const Usuarios = require("../Models/Usuarios");
const Avances = require("../Models/Avances");
const Solicitud = require("../Models/Solicitudes");
const { argsToArgsConfig } = require("graphql/type/definition");
const Solicitudes = require("../Models/Solicitudes");
const jwt = require("jsonwebtoken");
const secret = "mi_llave"

const generarJwt = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            name
        }
        jwt.sign(payload, secret, { expiresIn: "2h" },
            (err, token) => {
                if (err) {
                    console.log(err),
                        reject("No se pudo generar el token")
                }
                resolve(token)
            })
    })
}


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
        estado: { type: GraphQLString },
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
        estadoSolicitud: { type: GraphQLString }

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
        lider: { type: GraphQLID },

        avance: {
            type: new GraphQLList(AvanceType),
            resolve(parent, args) {
                const ID = parent.id
                return Avances.find({ proyectoId: ID })
            },
        },
        solicitud: {
            type: new GraphQLList(SolicitudType),
            resolve(parent, args) {
                const id = parent.id
                return Solicitud.find({ proyectoId: id })

            },
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


            resolve(_, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return Proyectos.find()
                }
                else {
                    return null
                }
            }

        },

        listarAvances: {
            type: new GraphQLList(AvanceType),
            args: {
                proyectoId: { type: GraphQLID }
            },
            resolve(_, { proyectoId }, context) {
                console.log(context);
                if (context.user.auth) {
                    return Avances.find({ proyectoId });
                }
                else {
                    return null
                }
            }
        },


        listarUsuarios: {
            type: new GraphQLList(UsuarioType),

            resolve(_, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return Usuarios.find()
                }
                else {
                    return null
                }
            }
        },


        listarEstudiantes: {
            type: new GraphQLList(UsuarioType),

            resolve(_, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return Usuarios.find({ rol: "Estudiante" })
                }
                else {
                    return null
                }
            }
        },

        listarSolicitudes: {
            type: new GraphQLList(ProyectoType),
            args: { lider: { type: GraphQLID } },

            resolve(_, { lider }, context) {
                console.log(context);
                if (context.user.auth) {
                    return Proyectos.find({ lider }, { "solicitudes": 1 })
                }
                else {
                    return null
                }
            }
        },


        listarProyectosLider: {
            type: new GraphQLList(ProyectoType),

            args: {
                lider: { type: GraphQLID },

            },
            async resolve(_, { lider }, context) {
                console.log(context);
                if (context.user.auth) {
                    const proyectos = await Proyectos.find({ lider })
                    return proyectos
                }
                else {
                    return null
                }
            }
        },



        /* Validar usuario  */
        ValidarUsuario: {
            type: UsuarioType,
            args: {
                correo: { type: GraphQLString },
                password: { type: GraphQLString }
            },

            async resolve(parents, { correo, password }) {
                const Usuario = await Usuarios.findOne({ correo }, { "password": 1, "nombre": 1, "estado": 1 })



                if (Usuarios === '') {
                    console.log("Usuario no encontrado")
                }

                if (Usuario.estado === "Pendiente") {
                    console.log("El usuario no ha sido autorizado por el administrador")
                }

                const validarPassword = bcrypt.compareSync(password, Usuario.password)

                if (validarPassword && Usuario.estado === "Autorizado") {
                    const token = await generarJwt(Usuario.id, Usuario.nombre)
                    console.log(token);

                }

                else {
                    return "Usuario o contraseña incorrecto";
                }



            }

        },



    }
});

/* Metodos para actualizar y crear datos */

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {

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
                lider: { type: GraphQLID }
            },
            async resolve(_, args, context) {
                console.log(context);
                if (context.user.auth) {
                    console.log(args);
                    const Proyecto = new Proyectos({
                        nombreProyecto: args.nombreProyecto,
                        objetivosGenerales: args.objetivosGenerales,
                        objetivosEspecificos: args.objetivosEspecificos,
                        presupuesto: args.presupuesto,
                        estadoAprobacion: args.estadoAprobacion,
                        estadoActual: args.estadoActual,
                        fase: args.fase,
                        lider: args.lider
                    });
                    return await Proyecto.save();
                }
                else {
                    return null
                }

            },
        },

        ActualizarEstadosProyecto: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                estadoAprobacion: { type: GraphQLString },
                estadoActual: { type: GraphQLString },
                fase: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoAprobacion: args.estadoAprobacion,
                            estadoActual: args.estadoActual,
                            fase: args.fase
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            },
        },

        ActualizarDatosProyectoLider: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                nombreProyecto: { type: GraphQLString },
                objetivosGenerales: { type: GraphQLString },
                objetivosEspecificos: { type: GraphQLString },
                presupuesto: { type: GraphQLInt },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            nombreProyecto: args.nombreProyecto,
                            objetivosGenerales: args.objetivosGenerales,
                            objetivosEspecificos: args.objetivosEspecificos,
                            presupuesto: args.presupuesto
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            },
        },



        /* Agregar un nuevo Usuario */
        crearAvance: {
            type: AvanceType,
            args: {
                proyectoId: { type: GraphQLID },
                descripcion: { type: GraphQLString }
            },    
            async resolve(_, args, context) {
                console.log(context);
                if (context.user.auth) { 
                    console.log(args);
                    const Avance = new Avances({
                        proyectoId: args.proyectoId,
                        descripcion: args.descripcion
                    });
                    return await Avance.save();
                }
                else {
                    return null
                } 
            },

        },

        /* Crear un nuevo Usuario & actualizar usuarios --paula*/
        AgregarUsuario: {
            type: UsuarioType,
            args: {
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
                estado: { type: GraphQLString },
                rol: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    const salt = bcrypt.genSaltSync();
                    /*  const password= bcrypt.hashSync(args.password, salt);  */
                    const Usuario = new Usuarios({
                        nombre: args.nombre,
                        correo: args.correo,
                        estado: "Pendiente",
                        rol: args.rol,
                        password: bcrypt.hashSync(args.password, salt),
                    });

                    return await Usuario.save();
                }
                else {
                    return null
                }
            }
        },

        ActualizarUsuarioPersonales: {
            type: UsuarioType,
            args: {
                id: { type: GraphQLID },
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Usuarios.findByIdAndUpdate(args.id,
                        {
                            nombre: args.nombre,
                            correo: args.correo,
                            estado: args.estado,
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            }
        },

        ActualizarEstado: {
            type: UsuarioType,
            args: {
                id: { type: GraphQLID },
                estado: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Usuarios.findByIdAndUpdate(args.id,
                        {
                            estado: args.estado
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            }
        },

        ActualizarEstadoEstudiantes: {
            type: UsuarioType,
            args: {
                id: { type: GraphQLID },
                estado: { type: GraphQLString },
            },
            async resolve(parent, args) {
                console.log(context);
                if (context.user.auth) {
                    return await Usuarios.findByIdAndUpdate(args.id,
                        {
                            estado: args.estado
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            }
        },

        crearSolicitud: {
            type: SolicitudType,
            args: {
                usuarioId: { type: GraphQLID },
                proyectoId: { type: GraphQLID },
                fechaIngreso: { type: GraphQLString },
                fechaEgreso: { type: GraphQLString },
                estadoSolicitud: { type: GraphQLString }
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    console.log(args);
                    const solicitud = new Solicitud({
                        usuarioId: args.usuarioId,
                        proyectoId: args.proyectoId,
                        fechaIngreso: args.fechaIngreso,
                        fechaEgreso: args.fechaEgreso,
                        estadoSolicitud: "Pendiente"
                    });
                    return await solicitud.save();
                }
                else {
                    return null
                }
            },
        },

        ActualizarSolicitud: {
            type: SolicitudType,
            args: {
                solicitudId: { type: GraphQLID },
                estadoSolicitud: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Solicitudes.findByIdAndUpdate(args.solicitudId,
                        {
                            estadoSolicitud: args.estadoSolicitud
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            }
        },

        ActualizarAvanceLider: {
            type: AvanceType,
            args: {
                id: { type: GraphQLID },
                observacion: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                    return await Avances.findByIdAndUpdate(args.id,
                        {
                            observacion: args.observacion
                        }, {
                        new: true
                    });
                }
                else {
                    return null
                }
            }
        },


        ActualizarAvanceEstudiante: {
            type: AvanceType,
            args: {
                id: { type: GraphQLID },
                descripcion: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.user.auth) {
                return await Avances.findByIdAndUpdate(args.id,
                    {
                        descripcion: args.descripcion
                    }, {
                    new: true
                });
            }
            else {
                return null
            }
            }
        },

    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


