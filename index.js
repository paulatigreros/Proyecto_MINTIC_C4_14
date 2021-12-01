const express = require('express');
const { graphqlHTTP } = require("express-graphql");
import schema from "./Backend/graphql/schema.js";
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const app = express();
import dbConnection from "./Backend/database/config.js";


/* const dbConnection=async() => {
    try{
        await mongoose.connect("mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/ProyectoCiclo4");
        console.log('conectado correctamente');
    }catch(error){
        console.log('error');
        throw new Error('error al iniciar base de datos');
    }
}; */

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
