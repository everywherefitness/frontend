import React from 'react';
// import Enrolled from './Client Components/EnrolledClasses'
// import Profile from './Client Components/ClientProfile'
// import Availables from './Client Components/AvailableClasses'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const ClientDashboard = (props) => {

    const { user } = props.session
    const { username } = user


    return (
        <div>
            {/* {revisit these and make them the Navigate instead?} */}
            <Link to={`/${username}/enrolled`}>
            Enrolled
            </Link>
            
            <Link to={`/${username}/available`}>
            Available
            </Link>

            <Link to={`/${username}/profile`}>
            Profile
            </Link>
        </div>

    );
};

const stateToProps = state => {
    return({
        session: state.loggedIn.session
    })
}

export default connect(stateToProps, {})(ClientDashboard);