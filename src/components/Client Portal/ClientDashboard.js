import React from 'react';
import Enrolled from './Client Components/EnrolledClasses'
import Profile from './Client Components/ClientProfile'
import Availables from './Client Components/AvailableClasses'
import { Link } from 'react-router-dom'


const ClientDashboard = () => {

    const user_id = localStorage.getItem('user_id')
    const username = localStorage.getItem('username')

    return (
        <div>
            <Link to={`/${user_id}/${username}/enrolled`}>
            Enrolled
            </Link>
            
            <Link to={`/${user_id}/${username}/available`}>
            Available
            </Link>

            <Link to={`/${user_id}/${username}/profile`}>
            Profile
            </Link>
        </div>

    );
};

export default ClientDashboard;