import React from 'react';
//import React, { Fragment } from 'react';

const PrimeraApp = ({ vamos }) => {

    const saludo = 'Hola Mundo';
    const objeto = {
        nombre: 'juan',
        edad : 21
    };

    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera App</p>
            <h3>{vamos}</h3>
            <pre>{JSON.stringify(objeto)}</pre>
        </>
    );
};

export default PrimeraApp;