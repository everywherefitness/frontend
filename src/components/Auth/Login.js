import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const initialFormValues = {
    username: '',
    password: ''
}

const initialFormErrors = {
    username: '',
    password: '',
}

const Login = () => {

    const navigate = useNavigate()

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(true)

    // change handler
    const onChange = e => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({
            ...formValues,
            [name]: valueToUse
        })
        // setFormValues({
        //     ...formValues,
        //     [name]: value
        // })
    }

    const onLogin = e => {
        e.preventDefault()
        const loginAttempt = {
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }

        axios.post(`http://localhost:5000/api/auth/login`, loginAttempt)
            .then(res => {
                console.log('res', res.data);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem("user_id", res.data.user.user_id);
                if (res.data.user.role_id === 1) {
                    navigate('/admin-portal')
                } else if (res.data.user.role_id === 2) {
                    navigate('/instructor-dashboard')
                } else {
                    navigate('/client-dashboard')
                }
            })
            .catch(err => {
                console.log('err', err);
            })
            .finally(setFormValues(initialFormValues))
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <label>
                    Username:
                    <input 
                        type='text'
                        name='username'
                        onChange = {onChange}
                        value = {formValues.username}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type = 'password'
                        name = 'password'
                        onChange = {onChange}
                        value = {formValues.password}
                    />
                </label>

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;