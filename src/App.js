import './App.css';

import { Route, Routes, Link } from 'react-router-dom'

import LandingPage from './components/Landing Page/LandingPage';
import Login from './components/Auth/Login';
// import UserForm from './components/Authed/Shared Components/UserForm';
import Register from './components/Auth/Register'
import PrivateRoute from './components/Auth/Private Route/PrivateRoute'
import PageNotFound from './components/Auth//Private Route/PageNotFound'
import AccessDenied from './components/Auth/Private Route/AccessDenied'
import ClientDashboard from './components/Authed/Client Portal/ClientDashboard'
import Available from './components/Authed/Client Portal/Client Components/AvailableClasses'
import Enrolled from './components/Authed/Client Portal/Client Components/EnrolledClasses'
import InstructorDashboard from './components/Authed/Instructor Portal/InstructorDashboard'
import InstructorClasses from './components/Authed/Instructor Portal/Instructor Components/InstructorClasses'
import AddClass from './components/Authed/Instructor Portal/Instructor Components/AddClass'
import Profile from './components/Authed/Shared Components/Profiles/Profile';
import Logout from './components/Auth/Logout';
import EditProfile from './components/Authed/Shared Components/Profiles/EditProfile';
import EditClass from './components/Authed/Instructor Portal/Instructor Components/EditClass'
import Header from './components/Header/Header';


import React from 'react'

function App() {

  return (
    <div className="App">

      {/* <Header /> */}

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

        <Route
          path=':username/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path=':username/profile/edit'
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />


    {/* ------ {Client Related} ------ */}
        <Route
          path='/:user_id&c/:username/dashboard/'
          element={
            <PrivateRoute>
              <ClientDashboard />
            </PrivateRoute>
          }
          />

              {/* {Client Classes} */}
        <Route
          path='/:username/enrolled'
          element={
            <PrivateRoute>
              <Enrolled />
            </PrivateRoute>
          }
          />

        <Route
          path='/:username/available'
          element={
            <PrivateRoute>
              <Available />
            </PrivateRoute>
          }
          />


      {/* ----- {Instructor Related} ----- */}

        <Route
          path='/:user_id&i/:username/dashboard/'
          element={
            <PrivateRoute>
              <InstructorDashboard />
            </PrivateRoute>
          }
          />


        <Route
          path='/:username/classes'
          element={
            <PrivateRoute>
              <InstructorClasses />
            </PrivateRoute>
          }
          />

        <Route
          path='/:username/classes/add'
          element={
            <PrivateRoute>
              <AddClass />
            </PrivateRoute>
          }
          />

        <Route
          path='/:username/classes/:class_id/edit'
          element={
            <PrivateRoute>
              <EditClass />
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
