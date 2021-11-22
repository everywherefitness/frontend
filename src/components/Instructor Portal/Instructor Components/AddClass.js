import React, { useState } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const initialFormValues = {
    class_name: '',
    category_id: '',
    intensity_level: '',
    current_capacity: '',
    max_capacity: '',
    start_time: '',
    duration: '',
    location: ''
}

const AddClass = (props) => {
    const { user_id } = props.user

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
        const newClass = { // how could I write a function to do this? -- revisit
            class_name: formValues.class_name.trim(),
            category_id: formValues.category_id.trim(), // integer
            intensity_level: formValues.intensity_level.trim(), // integer
            current_capacity: formValues.current_capacity.trim(), // integer
            max_capacity: formValues.max_capacity.trim(), // integer
            start_time: formValues.start_time.trim(),
            duration: formValues.duration.trim(),
            location: formValues.location.trim(),
            instructor_id: user_id
       }
    //    console.log('newClass',newClass)
       axiosWithAuth()
        .post(`http://localhost:5000/api/classes`, newClass)
        .then(res => {
            // revisit and figure out what to do when classes are made
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
            <form onSubmit = {onRegister}>
                <label>
                    Class Name:
                    <input
                        type = 'text'
                        name = 'class_name'
                        onChange = {onChange}
                        value = {formValues.class_name}
                    />
                </label>
                
                <label>
                    category_id:
                    <input 
                        // will be a drop down of available categories
                        type = 'text'
                        name = 'category_id'
                        onChange = {onChange}
                        value = {formValues.category_id}
                        placeholder = 'integer'
                    />
                </label>

                <label>
                    Intensity:
                    <input
                        type = 'text'
                        name = 'intensity_level'
                        onChange = {onChange}
                        value = {formValues.intensity_level}
                        placeholder = 'integer'
                    />
                </label>

                <label>
                    Start Time:
                    <input
                        type = 'text'
                        name = 'start_time'
                        onChange = {onChange}
                        value = {formValues.start_time}
                    />
                </label>

                <label>
                    Max Capacity:
                <input
                    type = 'text'
                    name = 'max_capacity'
                    onChange = {onChange}
                    value = {formValues.max_capacity}
                    placeholder = 'integer'
                />
                </label>

                <label>
                    Current Capacity:
                <input
                    type = 'text'
                    name = 'current_capacity'
                    onChange = {onChange}
                    value = {formValues.current_capacity}
                    placeholder = 'integer'
                />
                </label>

                <label>
                    Duration:
                <input
                    type = 'text'
                    name = 'duration'
                    onChange = {onChange}
                    value = {formValues.duration}
                />
                </label>

                <label>
                    Location:
                <input
                    type = 'text'
                    name = 'location'
                    onChange = {onChange}
                    value = {formValues.location}
                />
                </label>

                
                <button>Add New Class</button>
            </form>
        </div>
    );
};

const stateToProps = state => {
    return({
        user: state.session.user
    })
}

export default connect(stateToProps, {})(AddClass);