import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom"
import Gestionusuarios from './components/Gestionusuarios';
import Gestionventas from "./components/gestionventas";
import Gestionproductos from "./components/Gestionproductos";
import Ingresoproductos from "./components/Ingresoproductos";
import Ingresousuarios from "./components/Ingresousuarios";
import Ingresoventas from "./components/Ingresoventas";
import Login from "./components/Login";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/gestionventas" element={<Gestionventas/>} />
                <Route exact path="/Gestionusuarios" element={<Gestionusuarios/>} />
                <Route exact path="/Gestionproductos" element={<Gestionproductos/>} />
                <Route exact path="/Ingresoproductos" element={<Ingresoproductos/>} />
                <Route exact path="/Ingresoventas" element={<Ingresoventas/>} />
                <Route exact path="/Ingresousuarios" element={<Ingresousuarios/>} />
                <Route exact path="/Login" element={<Login/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Main