const bcrypt = require("bcrypt");
const graphql = require("graphql");
const Proyectos = require("../Models/Proyectos");
const Usuarios = require("../Models/Usuarios");
const Avances = require("../Models/Avances");
const Solicitud = require("../Models/Solicitudes")
const jwt = require("jsonwebtoken");
const { argsToArgsConfig } = require("graphql/type/definition");
const secret = "mi_llave"

const generarJwt = (uid, nombre) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            nombre
        }
        jwt.sign(payload, secret, { expiresIn: "2h" },
            (err, token) => {
                if (err) {
                    console.log(err)
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
        lider: {type: GraphQLID},

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

        listarProyectosLider: {
            type: new GraphQLList(ProyectoType),
            args:{
                lider: {type: GraphQLID}
            },
            resolve(parentes, {lider}) {
                return Proyectos.find({lider})
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

        listarEstudiantes: {
            type: new GraphQLList(UsuarioType),

            resolve() {
                return Usuarios.find({rol:"Estudiante"})
            },
        },

                
        /* Validar usuario  ---paula*/
        ValidarUsuario: {
            type: UsuarioType,
            args: {
                password: { type: GraphQLString },
                correo: { type: GraphQLString}
            },

            async Login(parents, {args}) {
            
                const usuario = await Usuarios.findOne({
                    correo
                })

                if (!usuario){
                    return "Usuario o contraseña incorrecta";
                }
                
                const validarPassword = bcrypt.compareSync(password, usuario.password)
                if (validarPassword){
                    const token = await generarJwt(usuario.id, usuario.nombre)
                    return token;
                }
                else {
                    return "Usuario o contraseña incorrecto";
                }
            }

        /*
        resolve (parents, {correo},{password}){
            console.log(correo);
            const usuario =  Usuarios.findOne({correo}) 
            if(usuario === correo){
                console.log("Usuario encontrado")
                return usuario
            }



            const validarPassword =  bcrypt.compare(password,usuario.password,function(err, res){
            if (validarPassword) {const token = generarJwt(usuario.id, usuario.nombre)
                return token;
                console.log(token)
            }
            else {
                return "Usuario o contraseña incorrecto";
            }
               });
            */ 
        },


    
    }
});

/* Metodos para actualizar y crear datos */

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        generarSolicitud: {
            type: SolicitudType,

            args: {
                proyectoId: {type: GraphQLID},
                usuarioId: { type: GraphQLID },
                estadoSolicitud: { type: GraphQLString },
                fechaIngreso: { type: GraphQLString },
                fechaEgreso: { type: GraphQLString },
            },

            async resolve(parent, args) {               
               const solicitud = new solicitud({ 
                proyectoId: args.proyectoId,
                usuarioId: args.usuario,
                estadoSolicitud: args.estado,
                fechaIngreso: args.fechaIngreso,
                fechaEgreso: args.fechaEgreso,})
                return await solicitud.save();
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
                lider: {type: GraphQLID}
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
                    fase: args.fase,
                    lider: args.lider
                });
                return await Proyecto.save();
            },
        },

        ActualizarEstadosProyecto: {
            type: ProyectoType,
            args: {
                proyectoId: {type: GraphQLID},
                estadoAprobacion: { type: GraphQLString },
                estadoActual: { type: GraphQLString },
                fase: { type: GraphQLString },
            },
            async resolve(parent, args) {
                return await Proyectos.findByIdAndUpdate(args.proyectoId, 
                    {   estadoAprobacion: args.estadoAprobacion,
                        estadoActual: args.estadoActual,
                        fase: args.fase                   
                    }, { 
                        new: true
                    });
            },
        },

        ActualizarDatosProyectoLider: {
            type: ProyectoType,
            args: {
                proyectoId: {type: GraphQLID},
                nombreProyecto: { type: GraphQLString },
                objetivosGenerales: { type: GraphQLString },
                objetivosEspecificos: { type: GraphQLString },
                presupuesto: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                return await Proyectos.findByIdAndUpdate(args.proyectoId, 
                    {   nombreProyecto: args.nombreProyecto,
                        objetivosGenerales: args.objetivosGenerales,
                        objetivosEspecificos: args.objetivosEspecificos,
                        presupuesto: args.presupuesto
                    }, { 
                        new: true
                    });
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
            async resolve(parent, args) {
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
        },

        ActualizarUsuarioPersonales:{
            type: UsuarioType,
            args: {
                id: {type: GraphQLID},
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
            },
            async resolve(parent, args) {
                return await Usuarios.findByIdAndUpdate(args.id, 
                {   nombre: args.nombre,
                    correo: args.correo,
                    estado: args.estado,                    
                }, { 
                    new: true
                });
            }
        },
    
        ActualizarEstado:{
            type: UsuarioType,
            args: {
                id: {type: GraphQLID},
                estado: { type: GraphQLString },
            },
            async resolve(parent, args) {
                return await Usuarios.findByIdAndUpdate(args.id, 
                {   
                    estado: args.estado               
                }, { 
                    new: true
                });
            }
        },

        ActualizarEstadoEstudiantes:{
            type: UsuarioType,
            args: {
                id: {type: GraphQLID},
                estado: { type: GraphQLString },
            },
            async resolve(parent, args) {
                return await Usuarios.findByIdAndUpdate(args.id,
                {   
                    estado: args.estado               
                }, { 
                    new: true
                });
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
                const Solicitud = new Solicitud({
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


