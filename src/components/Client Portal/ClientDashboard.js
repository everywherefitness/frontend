import React from 'react';
import Enrolled from './Client Components/EnrolledClasses'
import Profile from './Client Components/ClientProfile'
import Availables from './Client Components/AvailableClasses'

const ClientDashboard = () => {
    return (
        <div>
            Client Dashboard
            <Profile />
            <Enrolled />
            <Availables />
        </div>
    );
};

export default ClientDashboard;