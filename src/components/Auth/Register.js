import React, { useState } from 'react'


import axios from 'axios'

const initialFormValues = {
    name: '',
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
    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

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

    // axios [POST] upon submission
    const formSubmit = () => {
        const newAccount = {
           name: formValues.name.trim(),
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

   const onSubmit = e => {
       e.preventDefault()
       formSubmit()
   }

   return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>
                    Name:
                    <input
                        type = 'text'
                        name = 'name'
                        onChange = {onChange}
                        value = {formValues.name}
                    />
                </label>
                
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
        </div>
    );
};

export default Register;