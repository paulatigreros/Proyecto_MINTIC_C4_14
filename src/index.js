import express from "express";
import { graphqlHTTP } from "express-graphql";
/* import schema from "./graphql/schema" */
import { dbConnection } from "../database/config";


dbConnection();
const app = express();

const schema = {};

app.use("/graphql", graphqlHTTP({
    graphiql : true,
    schema : schema
}));

app.listen(4000, () => {
    console.log ("Servidor conectado en el puerto 4000");
})