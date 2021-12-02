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

    avances:{
        avance:{
            type:String,
            require: true
        },

        observacion:{
            type:String,
            require: true
        }

    },

    integrante:{
        usuario:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UsuariosModelo',
            require: true
        },

        estado:{
            type:String,
            require: true
        },

        fechaIngreso:{
            type:Date,
            require: true
        },

        fechaEgreso:{
            type:Date,
            require: true
        }

    } 

})
export default mongoose.model ("Proyectos", ProyectosSchema);

