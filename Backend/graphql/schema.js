const bcrypt = require("bcrypt");
const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const Usuarios = require("../Models/Usuarios");
const Avances = require("../Models/Avances");
const Solicitudes = require("../Models/Solicitudes")
const jwt = require("jsonwebtoken");
const secret = "mi_llave"

const generarJwt = (uid, nombre) => {
        return new Promise((resolve, reject) =>{
            const payload = {
                uid,
                nombre
            }
            jwt.sign(payload, secret, {expiresIn: "2h"}, 
                (err, token) => {
                    if (err) {
                        console.log (err)
                        reject("No se pudo generar el Token")
                    }
                    resolve(token)
                }
            )
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
        avance: {
            type: AvanceType,
            resolve(parent, args) {
                return Avances.findById(parent.proyectoId);
            },
        },
        solicitudId: {
            type: new GraphQLList(SolicitudType),
            resolve(parent, args) {
            return Solicitudes.filter((Solicitudes) => Solicitudes.proyectoId === parent.id);
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

        listarSolicitudes: {
            type: new GraphQLList(ProyectoType),

            resolve() {
                return Proyectos.find()
            },
        },


        /* Validar usuario  ---paula*/
        ValidarUsuario: {
            type: UsuarioType,
            args: {
                password: { type: GraphQLString },
                correo: { type: GraphQLString, 
                }
            },
            async resolve (parents, {correo,password}){
                console.log(correo);
                const usuario =  await Usuarios.findOne({correo}) 
                if(usuario===null){
                    console.log("Usuario no encontrado")
                    }
                
                console.log({password})
                    
              const validarPassword =  bcrypt.compareSync(password,usuario.password)
                if (validarPassword) { const token = generarJwt(usuario.id, usuario.nombre)
                    console.log(token)
                } 

                else {
                    return "Usuario o contraseña incorrecto";
                } 
                
            }, 
            

            
        },
    },

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
                estadoSolicitud: { type: GraphQLString }
            },
            async resolve(parent, args) {
                console.log(args);
                const Solicitud = new Solicitudes({
                    usuarioId: args.usuarioId,
                    proyectoId: args.proyectoId,
                    fechaIngreso: args.fechaIngreso,
                    fechaEgreso: args.fechaEgreso,
                    estadoSolicitud: "Pendiente"
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


