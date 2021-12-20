import React from 'react';
import Login from '../components/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ContentRoutes } from './ContentRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Ingresousuarios from "../components/Ingresousuarios";
import PantallaInicio from '../components/PantallaInicio';



export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>


                <Route exact path="/" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>} />


                <Route exact path="/Ingresousuarios" element={
                    <PublicRoute>
                        <Ingresousuarios />
                    </PublicRoute>

                } />


         {/*        <Route exact path="/PantallaInicio" element={
                    <PublicRoute>
                        <PantallaInicio />
                    </PublicRoute>

                } /> */}


                <Route exact path="/*" element={

                    <PrivateRoute>
                        <ContentRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRouter