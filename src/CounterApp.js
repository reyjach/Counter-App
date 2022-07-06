import React, {useState} from 'react';
import ProTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );

    const handleApp = () => {
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 );
    }

    const handleMin = () => {
        setCounter(counter -1);
    }

    const handleRes = () => {
        setCounter(value);
    }

    return (
        <>  
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleApp }>+1</button>
            <button onClick={ handleRes }>Reset</button>
            <button onClick={ handleMin }>-1</button>
        </>

    )
}

CounterApp.prototype = {
    value: ProTypes.number
}

export default CounterApp;

