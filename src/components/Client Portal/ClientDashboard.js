import React from 'react';
// import Enrolled from './Client Components/EnrolledClasses'
// import Profile from './Client Components/ClientProfile'
// import Availables from './Client Components/AvailableClasses'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const ClientDashboard = (props) => {

    const { user } = props
    
    const { user_id, username } = user


    return (
        <div>
            {/* {revisit these and make them the Navigate instead?} */}
            <Link to={`/cli/${username}/enrolled`}>
            Enrolled
            </Link>
            
            <Link to={`/cli/${username}/available`}>
            Available
            </Link>

            <Link to={`/cli/${username}/profile`}>
            Profile
            </Link>
        </div>

    );
};

const stateToProps = state => {
    return({
        user: state.session.user
    })
}

export default connect(stateToProps, {})(ClientDashboard);