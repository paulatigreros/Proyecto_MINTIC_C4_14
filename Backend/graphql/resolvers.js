import Proyectos from "../model/Proyectos.js";
export const resolvers = {
    Query:{
        Cursos() {
            //Importacion de data/curso
            return Proyectos.find();
          },
    },
};
