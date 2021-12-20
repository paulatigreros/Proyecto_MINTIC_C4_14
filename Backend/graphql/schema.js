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

const generarJwt = (uid, nombre , rol) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            nombre,
            rol
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
        id: { type: GraphQLID},
        nombre: { type: GraphQLString },
        password: { type: GraphQLString },
        correo: { type: GraphQLString },
        estado: { type: GraphQLString },
        rol: { type: GraphQLString },
        proyectos_asignados: { type: GraphQLString },
        token: { type: GraphQLString },
    }),
})


/* Proyectos */

const AvanceType = new GraphQLObjectType({
    name: "Avance",
    fields: () => ({
        descripcion: { type: GraphQLString },
        observacion: { type: GraphQLString },
        proyectoId: { type: GraphQLID },
        usuarioId: { type: GraphQLID },
        fechaAvance: { type: GraphQLString },
        nombreProyecto:{type: GraphQLString},
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
        fechaInicioproyecto: { type: GraphQLString },
        fechaFinalproyecto: { type: GraphQLString },


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


             async resolve(_, args, context) {
/*                 console.log(context);
                if (context.rol==="Administrador" || context.rol==="Estudiante") { */
                    return await Proyectos.find()
                /* } */

                /* else if(context.rol==="Lider"){ */

                    /* const proyectos = await Proyectos.find({ lider:context.uid })
                    return proyectos */

                /* } */

                /* else {
                    return null
                } */
            }

        },

        listarAvancesEstudiante: {
            type: new GraphQLList(AvanceType),
            args: {
                
            },
            resolve(_, args, context) {
                console.log(context);
               /*  if (context.rol==="Estudiante") 
                { */
                    return Avances.find({usuarioId:context.uid});
                 /*}
                else {
                    return null
                } */
            }
        },


        listarAvanceslider: {
            type: new GraphQLList(ProyectoType),
            args: {
                
            },
            async resolve  (_, args, context) {
                 console.log(context);
                /*if (context.rol==="Lider") 
                
                { */
                     return await Proyectos.find({lider:context.uid});
                    

                /*}
                 else {
                    return null
                } */
            }
        },            

        listarUsuarios: {
            type: new GraphQLList(UsuarioType),

            resolve(_, args, context) {
                console.log(context);
               /*  if (context.rol==="Administrador") { */
                    return Usuarios.find()
               /*  } */

                /* else if(context.rol==="Lider"){ */

                    /* return Usuarios.find({ rol: "Estudiante" })

                } */

                /* else {
                    return null
                } */
            }
        },


        listarSolicitudes: {
            type: new GraphQLList(ProyectoType),
            args: { lider: { type: GraphQLID } },

            resolve(_, { lider }, context) {
                /* console.log(context);
                if (context.user.auth) { */
                    return Proyectos.find({ lider }, { "solicitudes": 1 })
                /* } */
                /* else {
                    return null
                } */
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
                const Usuario = await Usuarios.findOne({ correo }, { "password": 1, "nombre": 1, "estado": 1, "rol": 1 })

                console.log(Usuario.rol)

                if (Usuarios === '') {
                    console.log("Usuario no encontrado")
                }

                if (Usuario.estado === "Pendiente") {
                    console.log("El usuario no ha sido autorizado por el administrador")
                }

                const validarPassword = bcrypt.compareSync(password, Usuario.password)

                if (validarPassword && Usuario.estado === "Autorizado") {
                    const token = await generarJwt(Usuario.id, Usuario.nombre, Usuario.rol)
                    return {token,
                       id: Usuario.id,
                       nombre:Usuario.nombre,
                       rol: Usuario.rol

                }
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
                
            },
            async resolve(_, args, context) {
                console.log(context);
                if (context.rol==="Lider") {
                    console.log(args);
                    const Proyecto = new Proyectos({
                        nombreProyecto: args.nombreProyecto,
                        objetivosGenerales: args.objetivosGenerales,
                        objetivosEspecificos: args.objetivosEspecificos,
                        presupuesto: args.presupuesto,
                        estadoAprobacion: "Pendiente",
                        estadoActual: "Inactivo",
                        fase: "",
                        lider: context.uid,
                    });
                    return await Proyecto.save();
                }
                else {
                    return null
                }

            },
        },

        

        AprobacionProyecto: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                estadoAprobacion: { type: GraphQLString },

            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Administrador") {
                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoAprobacion: args.estadoAprobacion,

                        }, {
                        new: true
                    });
                }
                else {
                    console.log("Usted no tiene permisos para esta función")
                    return null
                }
            },
        },

        ActualizarEstado: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                estadoActual: { type: GraphQLString },

            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Administrador") {
                    const Proyecto = await Proyectos.findById(args.proyectoId,{"fase":1}) 
                   
                    if(args.estadoActual==="Activo" && Proyecto.fase===" "  ){

                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoActual: args.estadoActual,
                            fase:"Iniciado",
                            fechaInicioproyecto:new Date()

                        }, {
                        new: true
                    });

                    }

                    else if(args.estadoActual==="Inactivo" ) {

                        await Solicitudes.find({proyectoId:args.proyectoId}).remove()

                        return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoActual: args.estadoActual,
                            fase:"Terminado",
                            fechaFinalproyecto:new Date()
                    
                        }, {
                        new: true
                    });}

                    else{return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoActual: args.estadoActual,
                        }, {
                        new: true
                    });

                    }

                }
                else {
                    console.log("Usted no tiene permisos para esta función")
                    return null
                }
            },
        },

        ActualizarFaseProyecto: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                fase: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Administrador") {

                    const Proyecto= await Proyectos.findById(args.proyectoId,{"fase":1})
                    if (Proyecto.fase==="En desarrollo" && args.fase ==="Terminado" ){

                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            fase: args.fase,
                            estadoActual:"Inactivo",
                            fechaFinalproyecto: new Date()
                        }, {
                        new: true
                    });

                    }

                    else{
                        return await Proyectos.findByIdAndUpdate(args.proyectoId,
                            {
                                fase: args.fase,
                            }, {
                            new: true
                        });

                    }
                }
                else {
                    console.log("Usted no tiene permisos para esta función")
                    return null
                }
            },
        },

        ReactivarProyecto: {
            type: ProyectoType,
            args: {
                proyectoId: { type: GraphQLID },
                estadoActual: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Administrador") {

                    const Proyecto= await Proyectos.findById(args.proyectoId,{"fase":1})
                    if (Proyecto.fase!="Terminado" ){

                    return await Proyectos.findByIdAndUpdate(args.proyectoId,
                        {
                            estadoActual:args.estadoActual,
                            fechaInicioproyecto: new Date(),
                        }, {
                        new: true
                    });

                    }

                    else{
                        return await Proyectos.findByIdAndUpdate(args.proyectoId,
                            {
                                fase: args.fase,
                            }, {
                            new: true
                        });

                    }
                }
                else {
                    console.log("Usted no tiene permisos para esta función")
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
                const Idproyecto=args.proyectoId
                const proyecto= await Proyectos.findOne({Idproyecto},{"lider":1})
                console.log(proyecto.lider);
                if (proyecto.lider===context.uid) {

                    const proyecto = await Proyectos.findById(args.proyectoId,{"estadoActual":1})
                    console.log (proyecto.estadoActual)

                    if(proyecto.estadoActual==="Activo" ){

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

                else{
                    console.log("Este proyecto esta inactivo")
                }

            }

                else{
                    console.log("Este proyecto no se encuentra asignado al usuario")
                }


                

                
            },
        },


        crearAvance: {
            type: AvanceType,
            args: {
                proyectoId: { type: GraphQLID },
                descripcion: { type: GraphQLString },

            },    
            async resolve(parent, args, context) {
                console.log(context);
                const proyectosolicitud = await Solicitudes.findOne({$and:[{proyectoId:args.proyectoId},
                    {usuarioId:context.uid}]},{"estadoSolicitud":1})
        
                if(proyectosolicitud!=null){
                    
                const proyectoestado = await Proyectos.findById(args.proyectoId,{"estadoActual":1})
                console.log(proyectosolicitud.estadoSolicitud==="Aprobado")
                console.log(context.uid)    
                if (proyectosolicitud.estadoSolicitud==="Aprobado") {

                
                    if(proyectoestado.estadoActual==="Activo"  ){
                        const avanceproyecto = await Avances.find({proyectoId:args.proyectoId})
                        console.log(avanceproyecto)
                        console.log(args.proyectoId)
                        if (avanceproyecto=="") {
                            
                            await Proyectos.findByIdAndUpdate(args.proyectoId,
                                {
                                    fase: "En desarrollo",
    
                                }, {
                                new: true
                            });   
                        
                            const Avance = new Avances({
                            proyectoId: args.proyectoId,
                            descripcion: args.descripcion,
                            usuarioId: context.uid,
                            fechaAvance:new Date()
                            
                        });

                        return await Avance.save();
                    }
                        else{
                            const Avance = new Avances({
                                proyectoId: args.proyectoId,
                                descripcion: args.descripcion,
                                usuarioId: context.uid,
                                fechaAvance:new Date()
                                
                            });

                            return await Avance.save();

                        }
                    
                        

                        
                    }
                    else {
                        console.log("Este proyecto esta inactivo")
                    }
                }

                else{
                    console.log("Este usuario no esta aprobado en este proyecto")
                }
                
            }
            else{
                console.log("Este usuario no tiene una solicitud a este proyecto")
            }


            }


        },

        /* Crear un nuevo Usuario & actualizar usuarios --paula*/
        AgregarUsuario: {
            type: UsuarioType,
            args: {
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
                rol: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                    const salt = bcrypt.genSaltSync();
                    const correo = args.correo
                    const validar = await Usuarios.findOne({correo})

                    console.log(validar)

                    if (validar==null){
                    const Usuario = new Usuarios({
                        nombre: args.nombre,
                        correo: args.correo,
                        estado: "Pendiente",
                        rol: args.rol,
                        password: bcrypt.hashSync(args.password, salt),
                    });
                    

                    return await Usuario.save();
                }
                else{   
                    console.log("Ya existe un usuario con el email digitado")
            }
                

            }
        },

        ActualizarUsuarioPersonales: {
            type: UsuarioType,
            args: {
                nombre: { type: GraphQLString },
                password: { type: GraphQLString },
                correo: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol!="") {
                    return await Usuarios.findByIdAndUpdate(context.uid,
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

        ActualizarEstadoUsuario: {
            type: UsuarioType,
            args: {
                id: { type: GraphQLID },
                estado: { type: GraphQLString },
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Administrador") {
                    return await Usuarios.findByIdAndUpdate(args.id,
                        {
                            estado: args.estado
                        }, {
                        new: true
                    });
                }
                else if (context.rol==="Lider" && args.estado!="No autorizado"
                )

                {
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
                proyectoId: { type: GraphQLID },
                fechaIngreso: { type: GraphQLString },
                fechaEgreso: { type: GraphQLString },
                estadoSolicitud: { type: GraphQLString }
            },
            async resolve(parent, args, context) {
                console.log(context);
                if (context.rol==="Estudiante") {
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
                const solicitud = await Solicitudes.findById(args.solicitudId,{"proyectoId":1})
                console.log(solicitud.proyectoId)
                const proyecto = await Proyectos.findById(solicitud.proyectoId,{"lider":1})
                console.log(proyecto.lider)
                if (context.rol==="Lider" && proyecto.lider === context.uid ) {
                    return await Solicitudes.findByIdAndUpdate(args.solicitudId,
                        {
                            estadoSolicitud: args.estadoSolicitud
                        }, {
                        new: true
                    });
                }
                else {
                    console.log("No tiene autorización para aceptar esta solicitud")
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
                const avance= await Avances.findById(args.id,{"proyectoId":1})
                const proyectoestado = await Proyectos.findById(avance.proyectoId,{"estadoActual":1})
                const proyectolider = await Proyectos.findById(avance.proyectoId,{"lider":1})
                console.log(proyectolider.lider)

                if (proyectolider.lider===context.uid) {

                    const proyecto = await Proyectos.findById(args.id,{"estadoActual":1})
                    

                    if(proyectoestado.estadoActual==="Activo" ){

                    return await Avances.findByIdAndUpdate(args.id,
                        {
                            observacion: args.observacion
                        }, {
                        new: true
                    });

                    }
                    else {
                        console.log("Este proyecto esta inactivo")
                    }
                }

                else{
                    console.log("Este usuario no tiene asignado el proyecto")
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
                const avance= await Avances.findById(args.id,{"proyectoId":1})
                console.log(avance.proyectoId)
                const proyectosolicitud = await Solicitudes.findOne({$and:[{proyectoId:avance.proyectoId},
                    {usuarioId:context.uid}]},{"estadoSolicitud":1})
                console.log(proyectosolicitud.estadoSolicitud)

                const proyectoestado = await Proyectos.findById(avance.proyectoId,{"estadoActual":1})
                console.log(proyectosolicitud.estadoSolicitud==="Aprobado")

                if (proyectosolicitud.estadoSolicitud==="Aprobado") {

                    const proyecto = await Proyectos.findById(args.id,{"estadoActual":1})
                    

                    if(proyectoestado.estadoActual==="Activo" ){

                    return await Avances.findByIdAndUpdate(args.id,
                        {
                            descripcion: args.descripcion
                        }, {
                        new: true
                    });

                    }
                    else {
                        console.log("Este proyecto esta inactivo")
                    }
                }

                else{
                    console.log("Este usuario no esta vinculado al proyecto")
                }
                
            }

            
        },

    


        

    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


