import './App.css';

import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
// import React, { useState } from 'react'

function App() {

  return (
    <div className="App">

      <Routes>

        <Route
          element={<Register />}
          path='/register'
        />

        <Route
          element={<Login />}
          path='/login'
        />

      </Routes>
    </div>
  );
}

export default App;
