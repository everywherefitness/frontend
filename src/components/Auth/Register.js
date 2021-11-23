import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../Authed/Shared Components/UserForm';
import axios from 'axios'

const initialFormValues = {
    username: '',
    email: '',
    password: '',
    role_id: '',
}

const Register = (props) => {

    console.log(props)
    const { formValues, setFormValues } = props
     // axios [POST] upon submission
     const formSubmit = () => {
        const newAccount = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            role_id: formValues.role_id ? 2 : 3
       }
    //    axios.post(`https://fitness-4-you.herokuapp.com/api/auth/register`, newAccount)
       axios.post(`http://localhost:5000/api/auth/register`, newAccount)
           .then(res => {
               console.log('res: ', res.data);
           })
           .catch(err => {
               console.log('err: ', err)
           })
           .finally(
               setFormValues(initialFormValues))
   }

   const onRegister = e => {
       e.preventDefault()
       formSubmit()
   }
    return (
        <div>
            <UserForm />
            <button onClick={onRegister}>Become a new User</button>
        </div>
    );
};

const stateToProps = state => {
    return({
        formValues: state.formValues,
        setFormValues: state.setFormValues
    })
}

export default connect(stateToProps, {  })(Register);