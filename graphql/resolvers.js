import Proyectos from "../models/proyectos.js";

export const resolvers = {
    Query:{
        Cursos() {
            //Importacion de data/curso
            return Proyectos.find();
          },
    },
};