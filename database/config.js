import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://ProyectoMinticC4:12345@cluster0.p2upl.mongodb.net/ProyectoCiclo4");
        console.log("base conectada")

    } catch (error) {
        console.log(error)

    }
}