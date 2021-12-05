const { Schema, model } = require('mongoose');

const SolicitudesSchema = Schema({

    usuarioId:{
        type: String,
        require: true
    },

    proyectoId:{
        type: String,
        require: true
    },

    fechaIngreso:{
        type:String,
        require:true
    },


    fechaEgreso:{
        type:String,
        require:true
    },

<<<<<<< HEAD
    estadoSolicitud: { 
        
        type: String,
        require:true
     }
=======
    estado:{
        type:String,
        require:true
    }
>>>>>>> Autenticación2
    
})
module.exports = model('Solicitud', SolicitudesSchema, 'Solicitudes');