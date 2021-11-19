import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { connect } from 'react-redux'

const ClientClasses = (props) => {

    const { user_id } = props.user

    const [ myClasses, setMyClasses ] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${user_id}/classes`)
            .then(res => {
                // console.log(res.data);
                setMyClasses(res.data)
            })
            .catch(err => {
                console.log(err);
                // ADD AN ERROR OR REDIRECT
            })
    }, [])

    const removeUserFromClass = class_id => {
        axiosWithAuth()
            .delete(`/users/${user_id}/${class_id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div style={{"border": "3px solid purple"}}>

            {myClasses.length === 0 ? 'Enroll today!' : 
                myClasses.map(enrolled => {
                    return(
                        <div>
                            <h2>{enrolled.class_id}</h2>
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
        user: state.session.user
    })
}

export default connect(stateToProps, {})(ClientClasses);