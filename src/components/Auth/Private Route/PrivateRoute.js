import { Navigate } from 'react-router-dom';
import React from 'react';
// import PageNotFound from './PageNotFound'


const PrivateRoute = ({ children }) => {
    const isAuthed = localStorage.getItem('token') // returns null if the token is not present
    // console.log(isAuthed);
    return isAuthed ? children : <Navigate to='/auth/error/sessions' /> // revisit
}

export default PrivateRoute;