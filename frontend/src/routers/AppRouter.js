import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ActualizarObservaciones from '../components/ActualizarObservaciones';
import CrearAvance from "../components/CrearAvance";
import CrearSolicitud from "../components/CrearSolicitud";
import DatosPersonales from "../components/DatosPersonales";
import IngresoProyecto from "../components/IngresoProyecto";
import ListarAvanceEstudiante from "../components/ListarAvanceEstudiante";
import ListarProyectos from "../components/Listarproyectos";
import Login from "../components/Login";
export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>

                <Route exact path="/ActualizarObservaciones" element={<ActualizarObservaciones/>} />
                <Route exact path="/CrearAvance" element={<CrearAvance/>} />
                <Route exact path="/CrearSolicitud" element={<CrearSolicitud/>} />
                <Route exact path="/DatosPersonales" element={<DatosPersonales/>} />
                <Route exact path="/IngresoProyecto" element={<IngresoProyecto/>} />
                <Route exact path="/ListarAvanceEstudiante" element={<ListarAvanceEstudiante/>} />
                <Route exact path="/ListarProyectos" element={<ListarProyectos/>} />
                <Route exact path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRouter