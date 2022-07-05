import React from 'react';
import ProTypes from 'prop-types';

const CounterApp = ({ value }) => {


    return (
        <>  
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        </>

    )
}

CounterApp.prototype = {
    value: ProTypes.number
}

export default CounterApp;

