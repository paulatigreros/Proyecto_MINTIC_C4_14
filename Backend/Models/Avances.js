const { Schema, model } = require('mongoose');

const AvancesSchema = Schema({

    descripcion:{
        type: String,
        require: true
    },

    observacion:{
        type: String,
        require: true
    },

    proyectoId:{
        type:String,
        require:true
    },

    usuarioId:{
        type:String,
        require:true

    },

    fechaAvance:{
        type:String,
        require:true

    },
    
    lider:{
        type:String,
        require:true

    }


})
module.exports = model('AvancesModelo', AvancesSchema);