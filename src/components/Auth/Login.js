import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { sessionSet, sessionStart, sessionSuccess } from './../../Redux/Actions'

const initialFormValues = {
    username: '',
    password: ''
}

// const initialFormErrors = {
//     username: '',
//     password: '',
// }

const Login = (props) => {

    const { sessionSet } = props

    // console.log(props.session, 'in login')

    const navigate = useNavigate()

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

    const onLogin = e => {
        e.preventDefault()
        const loginAttempt = {
            username: formValues.username.trim(),
            password: formValues.password
        }

        axios.post(`http://localhost:5000/api/auth/login`, loginAttempt)
            .then(res => {
                const { role_id, user_id, username } = res.data.user
                sessionSet({
                    user: {
                        role: role_id === 2 ? 'Instructor' : 'Client',
                        token: res.data.token,
                        user_id: user_id,
                        username: username
                    }
                })
                console.log('successful login', )

                if (role_id === 1) {
                    navigate('/admin-portal')
                }
                if (role_id === 2) {
                    navigate(`/${user_id}/${username}/dashboard/`)
                }
                if (role_id === 3) {
                    navigate(`/${user_id}/${username}/dashboard/`)
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

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, { sessionSet, sessionStart, sessionSuccess })(Login);