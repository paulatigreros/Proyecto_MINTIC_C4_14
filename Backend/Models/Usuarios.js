const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');


const UsuariosSchema = Schema({

    id:{
        type: String,
        require: true
    },

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

})

module.exports = model('UsuariosModelo', UsuariosSchema);