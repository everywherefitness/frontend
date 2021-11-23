import React, { useEffect } from 'react';
import axiosWithAuth from '../../../../utils/axiosWithAuth'
import { connect } from 'react-redux'
import { fetchAvailables, setAvailables } from '../../../../Redux/Actions';

const AvailableClasses = (props) => {

    const { user_id } = props.user
    const { availables } = props.classes
    const { isLoading, fetchAvailables, setAvailables } = props

    const getAvailables = () => {
        fetchAvailables()
        axiosWithAuth()
            .get('/classes')
            .then(res => {
                // console.log('res', res);
                setAvailables(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        
    }

    useEffect(() => {
        getAvailables()
    }, [])

    if (isLoading) {
        return(
            <div>Loading...</div>
        )
    }

    const joinClassAsClient = (class_id) => {
        // console.log(class_id);
        axiosWithAuth()
            .post(`/users/${user_id}/classes/${class_id}`)
            .then(() =>{
                // console.log('newClass',newClass); // just returns back the joined class object
                // revisit and make something happen here. returning res.data object
                // REVISIT - need to figure out how I want to make these classes like fade-out or disappear as you join them
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            Available Classes:
            {availables.length === 0 ? 'No classes' :
                availables.map((av) => {
                    // console.log(av);
                    return(
                        <div key={av.class_id}>
                            <h1>{av.class_name}</h1>
                            <button onClick={() => joinClassAsClient(av.class_id)}>Join</button>
                        </div>
                    )})
            }
        </div>
    );
};

const stateToProps = state => {
    return({
        user: state.session.loggedIn.user,
        classes: state.client.classes,
        isLoading: state.isLoading
    })
}

export default connect(stateToProps, { fetchAvailables, setAvailables })(AvailableClasses);