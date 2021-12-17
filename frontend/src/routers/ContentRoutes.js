import React from 'react'
import Gestionusuarios from '../components/Gestionusuarios';
import CrearProyecto  from '../components/CrearProyecto';
import Edicionproyectos from '../components/Edicionproyectos';
import Actualizaravance from '../components/Actualizaravance';
import Gestionavances from '../components/Gestionavances';
import Gestionsolicitudes from '../components/Gestionsolicitudes';
import ListarAvancelider from '../components/ListarAvancelider';
import ActualizarObservaciones from '../components/ActualizarObservaciones';
import CrearAvance from "../components/CrearAvance";
import CrearSolicitud from "../components/CrearSolicitud";
import DatosPersonales from "../components/DatosPersonales";
import IngresoProyecto from "../components/IngresoProyecto";
import ListarAvanceEstudiante from "../components/ListarAvanceEstudiante";
import ListarProyectos from "../components/Listarproyectos";
import Menu from "../components/Menu"
import { Route, BrowserRouter, Routes } from "react-router-dom";


export const ContentRoutes = () => {
    return (
        <>
<Menu/>
<Routes>

<Route exact path="/Gestionusuarios" element={<Gestionusuarios/>} />
<Route exact path="/CrearProyecto" element={<CrearProyecto/>} />
<Route exact path="/Edicionproyectos" element={<Edicionproyectos/>} />
<Route exact path="/Actualizaravance" element={<Actualizaravance/>} />
<Route exact path="/Gestionavances" element={<Gestionavances/>} />
<Route exact path="/Gestionsolicitudes" element={<Gestionsolicitudes/>} />
<Route exact path="/ListarAvancelider" element={<ListarAvancelider/>} />
<Route exact path="/ActualizarObservaciones" element={<ActualizarObservaciones/>} />
<Route exact path="/CrearAvance" element={<CrearAvance/>} />
<Route exact path="/CrearSolicitud" element={<CrearSolicitud/>} />
<Route exact path="/DatosPersonales" element={<DatosPersonales/>} />
<Route exact path="/IngresoProyecto" element={<IngresoProyecto/>} />
<Route exact path="/ListarAvanceEstudiante" element={<ListarAvanceEstudiante/>} />
<Route exact path="/ListarProyectos" element={<ListarProyectos/>} />

</Routes>
        </>
    )
}