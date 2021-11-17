import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const ClientClasses = () => {

    const user_id = localStorage.getItem('user_id')

    const [ myClasses, setMyClasses ] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${user_id}/classes`)
            .then(res => {
                console.log(res.data);
                setMyClasses(res.data)
            })
            .catch(err => {
                console.log(err);
                // ADD AN ERROR OR REDIRECT
            })
    }, [])

    return (
        <div style={{"border": "3px solid purple"}}>
            {myClasses.map(enrolled => {
                return(
                    <h2>{enrolled.class_id}</h2>
                )
            })}
        </div>
    );
};

export default ClientClasses;