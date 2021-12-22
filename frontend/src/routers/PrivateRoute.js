import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const auth = useAuth();

    // console.log("validacion", auth.isLogged);      

    return auth.isLogged() 
            ? children
            : <Navigate to="/"/>


    // return <h1>Hola mundo</h1>
}

export default PrivateRoute