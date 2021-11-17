import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth'

const user_id = localStorage.getItem('user_id')

const AvailableClasses = () => {
    const [ availables, setAvailables ] = useState([])

    const getAvailables = () => {
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

    const joinClassAsClient = (class_id) => {
        // console.log(class_id);
        axiosWithAuth()
            .post(`/users/${user_id}/${class_id}`)
            .then(something =>{
                console.log(something);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            Available Classes:
            {availables.map((av) => {
                // console.log(av);

                return(
                    <div key={av.class_id}>
                        <h1>{av.name}</h1>
                        <button onClick={() => joinClassAsClient(av.class_id)}>Join</button>
                    </div>
                )
            })}
        </div>
    );
};

export default AvailableClasses;