import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/ProyectoCiclo4");
        console.log('Base de Datos conectada');
    }
    catch (error) {

        console.log("Error en la conexion de la base de datos");
    }
}
export default dbConnection;