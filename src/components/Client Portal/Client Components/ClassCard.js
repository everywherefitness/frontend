import React from 'react';

const ClassCard = (props) => {
    const { availableClass } = props
    return (
        <div>
            {availableClass.name}
            <button>Join</button>
        </div>
    );
};

export default ClassCard;