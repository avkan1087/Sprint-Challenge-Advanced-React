import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="cards">
            <h4>{props.name} </h4>
            <p>{props.country} </p>
           
        </div>
    )
}

export default PlayerCard