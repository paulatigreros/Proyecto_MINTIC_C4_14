const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const ProyectosSchema = Schema({

    nombreProyecto:{
        type: String,
        require: true
    },

    objetivosGenerales:{
        type: String,
        require: true
    },

    objetivosEspecificos:{
        type: String,
        require: true
    },

    presupuesto:{
        type: Number,
        require: true
    },

    estadoAprobacion:{
        type: String,
        require: true
    },

    estadoActual:{
        type: String,
        require: true
    },

    fase:{
        type: String,
        require: true
    },

    avances:[{
        avance: String,
        observacion:String,
    }

    ],

    solicitudId:{

        type:String,
        require:true 

},
    lider:{
        type: Schema.Types.ObjectId,
        require:true
    },

   

})
module.exports = model('ProyectosModelo', ProyectosSchema);