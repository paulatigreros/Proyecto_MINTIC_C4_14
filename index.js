const {MongoClient} =require('mongodb');

const url= 'mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/'
const client= new MongoClient(url);
const dbName= 'ProyectoCiclo4';

async function main (){
    await client.connect();
    console.log("Conexión establecida exitosamente");
    return 'done';
};

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=> client.close());
