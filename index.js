import express from "express";
import { graphqlHTTP } from "express-graphql";
/* import schema from "./Backend/graphql/schema.js" */
/* const { MongoClient } = require('mongodb'); */
import mongoose from "mongoose";
const app = express();
import dbConnection from "./Backend/database/config.js";
import schema from "./Backend/graphql/schema.js";


dbConnection();

app.listen(process.env.PORT || 4000, () => {
    console.log(`servidor corriendo en el puerto ${process.env.Port || 4000}`);
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema

}))



/* main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close()); */
