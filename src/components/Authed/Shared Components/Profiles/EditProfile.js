import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
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

    const navigate = useNavigate()

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

    
    const editSubmit = () => {
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
        editSubmit()
    }

    const deleteProfile = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`http://localhost:5000/api/users/${user_id}`)
            .then(() => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
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

            <button onClick={deleteProfile}>Delete Account</button>
        </>
    );
};

const stateToProps = state => {
    return({
        user: state.loggedIn.session.user
    })
}

export default connect(stateToProps, {})(EditProfile);