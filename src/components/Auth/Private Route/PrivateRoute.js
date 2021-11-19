import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux'


const PrivateRoute = (props) => {
    const { children, isAuthed } = props
    return isAuthed ? children : <Navigate to='/auth/error/sessions' /> // revisit
}

const mapStateToProps = state => {
    return({
        isAuthed: state.isAuthed
    })
}

export default connect(mapStateToProps, {})(PrivateRoute);