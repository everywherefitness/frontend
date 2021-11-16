import React, { useState } from 'react';
import axios from 'axios'

const initialFormValues = {
    username: '',
    password: ''
}

const initialFormErrors = {
    username: '',
    password: '',
}

const Login = () => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(true)

    // change handler
    const onChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
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