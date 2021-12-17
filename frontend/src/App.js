import React from 'react';
import './App.css';
import AuthProvider from './providers/Authprovider';
import AppRouter from './routers/AppRouter'


const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>

  )
}


export default App
