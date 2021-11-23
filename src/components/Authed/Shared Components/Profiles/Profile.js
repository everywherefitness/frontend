import React from 'react';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';

const Profile = (props) => {

    const { role, username } = props.user
    const navigate = useNavigate()

    const editAccount = () => {
        navigate(`edit`)
    }

    return (
        <div>
            <h3>Welcome back, {username}</h3>
            <button onClick={editAccount}>Edit Account</button>

        {/* {role === 'Instructor' ?
            <div>
                <h4>instructor</h4>
            </div>
            :
            <div>
                <h4>client</h4>
            </div>
        } */}
        </div>
        
    );
};

const stateToProps = state =>{
    return({
        user: state.session.loggedIn.user
    })
}

export default connect(stateToProps, {})(Profile);