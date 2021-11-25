const {MongoClient} =require('mongodb');
const express = require ('express'); 

const app = express(); 

 

const url= 'mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/'
const client= new MongoClient(url);
const dbName= 'ProyectoCiclo4';

async function main (){
    await client.connect();
    console.log("Conexión establecida exitosamente");
    return 'done';
};

app.listen(process.env.PORT || 4000 ,() => {  
    console.log(`servidor corriendo en el puerto ${ process.env.Port || 4000 }`);  
    }) 


main()
    .then(console.log)
    .catch(console.error)
    .finally(()=> client.close());
