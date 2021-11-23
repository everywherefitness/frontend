import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { endSession } from '../../Redux/Actions';
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {

    
    const { endSession } = props
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.removeItem('token')
        endSession()
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

export default connect(stateToProps, { endSession })(Logout);