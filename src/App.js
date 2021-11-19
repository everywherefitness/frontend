import './App.css';

import { Route, Routes, Link } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/Private Route/PrivateRoute'
import ClientDashboard from './components/Client Portal/ClientDashboard'
import InstructorDashboard from './components/Instructor Portal/InstructorDashboard'
import PageNotFound from './components/Auth//Private Route/PageNotFound'
import AccessDenied from './components/Auth/Private Route/AccessDenied'
import LandingPage from './components/Landing Page/LandingPage';
import Enrolled from './components/Client Portal/Client Components/EnrolledClasses'
import Available from './components/Client Portal/Client Components/AvailableClasses';
import Profile from './components/Client Portal/Client Components/ClientProfile';
import Logout from './components/Auth/Logout';

// import React, { useState } from 'react'

function App() {

  return (
    <div className="App">

      <Link to='/login'>Login</Link>
      <Link to='/logout'>logout</Link>

      <Routes>

        <Route
          exact path='/'
          element={<LandingPage />}
        />

      {/* ----- {Auth Related} ----- */}
      
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


      {/* ------ {Client Related} ------ */}

        <Route
          path='/:user_id/:username/dashboard/'
          element={
            <PrivateRoute>
              <ClientDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='/:user_id/:username/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

              {/* {Client Classes} */}
        <Route
          path='/:user_id/:username/enrolled'
          element={
            <PrivateRoute>
              <Enrolled />
            </PrivateRoute>
          }
        />

        <Route
          path='/:user_id/:username/available'
          element={
            <PrivateRoute>
              <Available />
            </PrivateRoute>
          }
        />


      {/* ----- {Instructor Related} ----- */}

        <Route
          path='/:user_id/:username/dashboard/'
          element={
            <PrivateRoute>
              <InstructorDashboard />
            </PrivateRoute>
          }
        />

      {/* ----- {Logout} ----- */}
        <Route
          path='/logout'
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
