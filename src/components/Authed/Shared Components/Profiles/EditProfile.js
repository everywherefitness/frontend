import React, { useState } from 'react'
import axios from 'axios'
import { connect, connectAdvanced } from 'react-redux';
import axiosWithAuth from '../../../../utils/axiosWithAuth';


const initialFormValues = {
    username: '',
    email: '',
    password: '',
}

// const initialFormErrors = {
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     role_id: ''
// }

const EditProfile = (props) => {

    const { user_id } = props.user
    console.log(user_id)

    const [ formValues, setFormValues ] = useState(initialFormValues)

    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

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

    const formSubmit = () => {
        const editedAccount = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
        }
        axiosWithAuth()
            .put(`http://localhost:5000/api/users/${user_id}`, editedAccount)
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
        <>
            <form onSubmit={editProfile}>
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

                {/* <label>Role:
                <input
                    type = 'checkbox'
                    name = 'role_id'
                    onChange = {onChange}
                    value = {true ? 2 : 3}
                />
                </label> */}

                <button>Edit Account</button>         
            </form>
        </>
    );
};

const stateToProps = state => {
    return({
        user: state.loggedIn.session.user
    })
}

export default connect(stateToProps, {})(EditProfile);