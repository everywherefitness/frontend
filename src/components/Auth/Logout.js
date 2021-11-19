import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { sessionEnd } from '../../Redux/Actions';
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {

    
    const { sessionEnd } = props
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.removeItem('token')
        sessionEnd()
        navigate('/')
    })

    return (
        <div></div>
    );
};

const stateToProps = state => {
    return({
        state: state
    })
}

export default connect(stateToProps, { sessionEnd })(Logout);