import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [user, token]);


    const contextValue = {
        user,
        token,
        setToken(token) {
            setToken(token);
        },
        setUser(usr) {
            setUser(usr);
        },
        logout() {
            setToken(null);
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider;