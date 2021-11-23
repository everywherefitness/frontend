import React, { useState } from 'react'

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

const UserForm = () => {

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

   return (
        <>
            <form>
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
            </form>
        </>
    );
};


export default UserForm;