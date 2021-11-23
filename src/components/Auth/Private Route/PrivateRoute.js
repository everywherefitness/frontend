import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'


const PrivateRoute = (props) => {
    const navigate = useNavigate()
    const { children, isAuthed } = props
    return isAuthed ? children : navigate('/auth/error/sessions') // revisit
}

const mapStateToProps = state => {
    return({
        isAuthed: state.session.loggedIn.isAuthed
    })
}

export default connect(mapStateToProps, {})(PrivateRoute);