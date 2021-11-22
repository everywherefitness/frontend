import React from 'react';
import { connect } from 'react-redux'

const InstructorProfile = (props) => {

    const { username } = props.user

    return (
        <div style={{"border": "3px solid red"}}>
            <h3>Welcome back, {username}</h3>
        </div>
    );
};

const stateToProps = state =>{
    return({
        user: state.session.user
    })
}

export default connect(stateToProps, {})(InstructorProfile);