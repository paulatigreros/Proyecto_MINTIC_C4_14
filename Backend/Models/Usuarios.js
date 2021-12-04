const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');


const UsuariosSchema = Schema({

    nombre:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    correo:{
        type: String,
        require: true
    },    

    estado:{
        type: String,
        require: true
    }, 

    rol:{
        type: String,
        require: true
    },

    proyectos_asignados:{
        type: ObjectId,
        require: true
    }
})

module.exports = model('UsuariosModelo', UsuariosSchema);