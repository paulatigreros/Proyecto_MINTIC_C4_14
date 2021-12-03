const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const schema = require("./Backend/graphql/schema");
const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const app = express();



const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/ProyectoCiclo4");
        console.log("base conectada")
        
    } catch (error) {
        console.log(error)
        
    }
} 

dbConnection();


app.listen(process.env.PORT || 4000, () => {
    console.log(`servidor corriendo en el puerto ${process.env.Port || 4000}`);
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema

}))

app.get("/" , (req,res)=>{
    res.json({
        ok : true,
        msg : "Funcionando"

    })

})

