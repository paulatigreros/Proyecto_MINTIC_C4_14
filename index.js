const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const schema = require("./Backend/graphql/schema");
const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const app = express();
const { dbConnection } = require("./Backend/Database/config")

dbConnection();

const url = 'mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/'
const client = new MongoClient(url);
const dbName = 'ProyectoCiclo4';

async function main() {
    await client.connect();
    console.log("Conexión establecida exitosamente");
    return 'done';
};

app.listen(process.env.PORT || 4000, () => {
    console.log(`servidor corriendo en el puerto ${process.env.Port || 4000}`);
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema

}))



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
