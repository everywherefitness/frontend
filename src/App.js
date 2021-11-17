import './App.css';

import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/Private Route/PrivateRoute'
import ClientDashboard from './components/Client Portal/ClientDashboard'
import InstructorDashboard from './components/Instructor Portal/InstructorDashboard'
import PageNotFound from './components/Auth//Private Route/PageNotFound'
import AccessDenied from './components/Auth/Private Route/AccessDenied'
import LandingPage from './components/Landing Page/LandingPage';

// import React, { useState } from 'react'

function App() {

  return (
    <div className="App">

      <Routes>

        <Route
          exact path='/'
          element={<LandingPage />}
        />

      {/* {Auth Related} */}
        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/auth/error/sessions'
          element={<AccessDenied />}
        />

        <Route
          path='*'
          element={<PageNotFound />}
        />


      {/* {Client Related} */}
        <Route
          path='/client-dashboard'
          element={
            <PrivateRoute>
              <ClientDashboard />
            </PrivateRoute>
          }
        />

      {/* {Instructor Related} */}
        <Route
          path='/instructor-dashboard'
          element={
            <PrivateRoute>
              <InstructorDashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
