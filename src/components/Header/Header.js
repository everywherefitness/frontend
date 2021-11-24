import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div class='mx-40 bg-primary text-white space-x-3 text-left'>
            <Link to='/'>Classes</Link>
            <Link to='/register'>Profile</Link>
            <Link to='/login'>Logout</Link>
        </div>
    );
};

export default Header;