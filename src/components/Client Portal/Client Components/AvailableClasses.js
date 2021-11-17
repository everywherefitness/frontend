import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth'
import ClassCard from './ClassCard';

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

    return (
        <div>
            Available Classes:
            {availables.map((av) => {
                return(
                    <ClassCard availableClass={av} key={av.class_id} />// could refactor into redux so that I can make this more useful across the app
                )
            })}
        </div>
    );
};

export default AvailableClasses;