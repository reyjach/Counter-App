import React from 'react';
//import React, { Fragment } from 'react';
import ProTypes from 'prop-types';

const PrimeraApp = ({ vamos, subtitulo }) => {

    const saludo = 'Hola Mundo';
    const objeto = {
        nombre: 'juan',
        edad : 21
    };

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
            <h3>{vamos}</h3>
            <pre>{JSON.stringify(objeto)}</pre>
        </>
    );
};

PrimeraApp.prototype = {
    saludo:ProTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;