import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
    username: '',
    email: '',
    password: '',
    role_id: '',
}

// const initialFormErrors = {
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     role_id: ''
// }

const Register = () => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const navigate = useNavigate()

    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

    const onChange = e => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({
            ...formValues,
            [name]: valueToUse
        })
    }

    const formSubmit = () => {
        const newAccount = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            role_id: formValues.role_id ? 2 : 3
        }
        axios.post(`http://localhost:5000/api/auth/register`, newAccount)
            .then(() => {
                navigate('/login')
                // revisit and add some type of UI
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }
    
    const registerNewUser = e => {
        e.preventDefault()
        formSubmit()
    }

   return (
        <>
            <form onSubmit={registerNewUser}>
                <label>
                    Username:
                    <input
                        type = 'text'
                        name = 'username'
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

                <label>
                    Email:
                    <input
                        type = 'email'
                        name = 'email'
                        onChange = {onChange}
                        value = {formValues.email}
                    />
                </label>

                <label>Role:
                <input
                    type = 'checkbox'
                    name = 'role_id'
                    onChange = {onChange}
                    value = {true ? 2 : 3}
                />
                </label>

                <button>Become a new User</button>         
            </form>
        </>
    );
};

export default Register;