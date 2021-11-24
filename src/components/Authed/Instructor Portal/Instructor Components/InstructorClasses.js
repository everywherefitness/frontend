import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchInstClasses, setInstClasses } from '../../../../Redux/Actions';
import axiosWithAuth from '../../../../utils/axiosWithAuth';
import { useNavigate } from 'react-router'

const InstructorClasses = (props) => {

    const { fetchInstClasses, setInstClasses } = props
    const { user_id, username } = props.user
    const { created } = props.classes
    const navigate = useNavigate()
    
    // console.log(user_id, created, props)
    const getInstClasses = () => {
        fetchInstClasses()
        axiosWithAuth()
            .get(`/users/${user_id}/inst/classes`)
            .then(resp => {
                setInstClasses(resp.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getInstClasses()
    }, [])

    return (
        <div>
            {created.length === 0 ? 'Create a class to get started' :
                created.map(cls => {
                    return(
                        <>
                            <h3>{cls.class_name}</h3>
                        </>
                    )
                })}
            <button>Edit Classes</button>
        </div>
    );
};

const stateToProps = state => {
    return({
        user: state.session.loggedIn.user,
        classes: state.instructor.classes
    })
}

export default connect(stateToProps, { fetchInstClasses, setInstClasses })(InstructorClasses);