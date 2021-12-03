import Proyectos from "../models/proyectos.js";

export const resolvers = {
    Query:{
        Cursos() {
            
            return Proyectos.find();
          },
    },
};