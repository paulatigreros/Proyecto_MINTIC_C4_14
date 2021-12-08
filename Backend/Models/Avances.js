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
    }
    
})
module.exports = model('AvancesModelo', AvancesSchema);