import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Gestionusuarios from '../components/Gestionusuarios';
import Ingresousuario from "../components/Ingresousuario";
import CrearProyecto  from '../components/CrearProyecto';
import Edicionproyectos from '../components/Edicionproyectos';
import Actualizaravance from '../components/Actualizaravance';
import Gestionavances from '../components/Gestionavances';
import Gestionsolicitudes from '../components/Gestionsolicitudes';

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
                <Route exact path="/Gestionusuarios" element={<Gestionusuarios/>} />
                <Route exact path="/Ingresousuario" element={<Ingresousuario/>} />
                <Route exact path="/CrearProyecto" element={<CrearProyecto/>} />
                <Route exact path="/Edicionproyectos" element={<Edicionproyectos/>} />
                <Route exact path="/Actualizaravance" element={<Actualizaravance/>} />
                <Route exact path="/Gestionavances" element={<Gestionavances/>} />
                <Route exact path="/Gestionsolicitudes" element={<Gestionsolicitudes/>} />

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