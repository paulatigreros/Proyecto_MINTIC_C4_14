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