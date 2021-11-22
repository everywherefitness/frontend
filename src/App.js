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
import ClientProfile from './components/Client Portal/Client Components/ClientProfile';
import InstructorProfile from './components/Instructor Portal/Instructor Components/InstructorProfile'
import AddClass from './components/Instructor Portal/Instructor Components/AddClass';
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
          path='/cli/:username/dashboard/'
          element={
            <PrivateRoute>
              <ClientDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='/cli/:username/profile'
          element={
            <PrivateRoute>
              <ClientProfile />
            </PrivateRoute>
          }
        />

              {/* {Client Classes} */}
        <Route
          path='/cli/:username/enrolled'
          element={
            <PrivateRoute>
              <Enrolled />
            </PrivateRoute>
          }
        />

        <Route
          path='/cli/:username/available'
          element={
            <PrivateRoute>
              <Available />
            </PrivateRoute>
          }
        />


      {/* ----- {Instructor Related} ----- */}

        <Route
          path='/int/:username/dashboard/'
          element={
            <PrivateRoute>
              <InstructorDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='/int/:username/profile/'
          element={
            <PrivateRoute>
              <InstructorProfile />
            </PrivateRoute>
          }
        />

        <Route
          path='/int/:username/classes/add'
          element={
            <PrivateRoute>
              <AddClass />
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
