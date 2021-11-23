import React from 'react';
// import Enrolled from './Client Components/EnrolledClasses'
// import Profile from './Client Components/ClientProfile'
// import Availables from './Client Components/AvailableClasses'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const InstructorDashboard = (props) => {

    const { user } = props
    
    const { user_id, username } = user

    return (
        <div>
            {/* {revisit these and make them the Navigate instead?} */}

            <Link to={`/${username}/profile`}>
            Profile
            </Link>

            <Link to={`/${username}/classes/add`}>
            Add Class
            </Link>

            <Link to={`/${username}/classes`}>
            My Classes
            </Link>
        </div>

    );
};

const stateToProps = state => {
    return({
        user: state.loggedIn.session.user
    })
}

export default connect(stateToProps, {})(InstructorDashboard);