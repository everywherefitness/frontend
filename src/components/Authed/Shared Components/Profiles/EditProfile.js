import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../UserForm';
import axios from 'axios'

const EditProfile = (props) => {
    
    const { user_id } = props.user
    
    const formSubmit = () => {
        const editedAccount = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            role_id: formValues.role_id ? 2 : 3
        }
        console.log(editedAccount)
    //    axios.post(`https://fitness-4-you.herokuapp.com/api/auth/register`, newAccount)
        axios.put(`http://localhost:5000/api/users/${user_id}`, editedAccount)
            .then(res => {
                console.log('res: ', res.data);
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

   const editProfile = e => {
       e.preventDefault()
       formSubmit()
   }
    return (
        <div>
            <UserForm />
            <button onClick={editProfile}>Edit Profile</button>
        </div>
    );
};

const stateToProps = state => {
    return({
        user: state.loggedIn.session.user
    })
}

export default connect(stateToProps, {  })(EditProfile);