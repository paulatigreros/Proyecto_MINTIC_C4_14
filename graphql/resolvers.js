import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";


const typeDefs = `
    type Query {
        Proyectos:[Proyecto],

    }

    type:Proyecto {
    nombreProyecto: String,
    objetivosGenerales:String,
    objetivosEspecificos: String,
    presupuesto:Number,
    estadoAprobacion:String,
    estadoActual:String,
    fase:String,
},


`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
import Proyectos from "../model/Proyectos.js";
export const resolvers = {
    Query:{
        Cursos() {
            //Importacion de data/curso
            return Proyectos.find();
          },
    },
};
