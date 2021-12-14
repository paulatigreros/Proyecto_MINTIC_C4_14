import React from 'react';
import Login from '../components/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ContentRoutes } from './ContentRoutes';
import Ingresousuarios from '../components/Ingresousuarios';






export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/Ingresousuarios" element={<Ingresousuarios/>} />
            <Route exact path="/*" element={<ContentRoutes/>} />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRouter