import React from 'react';
import ProTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const handleApp = (e) => {
        console.log(e)
    }

    return (
        <>  
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button onClick={ handleApp }>+1</button>
        </>

    )
}

CounterApp.prototype = {
    value: ProTypes.number
}

export default CounterApp;

