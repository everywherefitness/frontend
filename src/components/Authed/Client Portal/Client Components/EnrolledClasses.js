import React, { useEffect } from 'react';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
import { connect } from 'react-redux'
import { fetchEnrolled, setEnrolled } from '../../../../Redux/Actions/index'; 

const ClientClasses = (props) => {

    const { isLoading, fetchEnrolled, setEnrolled } = props
    const { user_id } = props.user
    const { enrolled } = props.classes

    const getEnrolled = () => {
        fetchEnrolled()
        axiosWithAuth()
            .get(`/users/${user_id}/cli/classes`)
            .then(res => {
                // console.log('setenrolled res.data', res.data);
                setEnrolled(res.data)
            })
            .catch(err => {
                console.log(err);
                // revisit - ADD AN ERROR OR REDIRECT
            })
    }

    useEffect(() => {
        getEnrolled()
    }, [])

    const removeUserFromClass = class_id => {
        axiosWithAuth()
            .delete(`/users/${user_id}/classes/${class_id}`)
            .then(res => {
                console.log(res);
                getEnrolled() // has to be a better way to do this = REVISIT
            })
            .catch(err => {
                console.log(err);
            })
    }

    if (isLoading) {
        return(
            <div>Loading....</div>
        )
    }
    return (
        <div style={{"border": "3px solid purple"}}>

            {enrolled.length === 0 ? 'Enroll today!' : 
                enrolled.map(enrolled => {
                    return(
                        <div>
                            <h2>{enrolled.class_name}</h2>
                            <button
                                onClick={() => removeUserFromClass(enrolled.class_id)}
                            >Remove
                            </button>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

const stateToProps = state => {
    return({
        user: state.loggedIn.session.user,
        classes: state.client.classes,
        isLoading: state.isLoading
    })
}

export default connect(stateToProps, { fetchEnrolled, setEnrolled })(ClientClasses);