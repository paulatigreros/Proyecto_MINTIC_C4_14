const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const schema = require("./Backend/graphql/schema");
const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv= require("dotenv");

dotenv.config();


const secret = "mi_llave";

const validarJwt = (req, res, next) => {
  let token = "";
  token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    req.user = { auth: false };
    return next();
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  try {
    const { uid, nombre } = jwt.verify(token, secret);
    console.log("El token es: ", token);
    console.log(uid, nombre);
    req.user = { auth: true };
    return next();
  } catch (error) {
    req.user = { auth: false };
    return next();
  }
};



app.use(validarJwt);



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


app.use("/graphql", graphqlHTTP((req) => ({
    graphiql : true,
    schema : schema,
    context : {
        user : req.user
    }
})));

app.get("/" , (req,res)=>{
    res.json({
        ok : true,
        msg : "Funcionando"

    })

})

