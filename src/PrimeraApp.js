import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ vamos, subtitulo }) => {

    /*const saludo = 'Hola Mundo';
    const objeto = {
        nombre: 'juan',
        edad : 21
    };
    */
    return (
        <>
            {/*<h1> {saludo} </h1> */}
            <h1> {vamos} </h1>
            <p> {subtitulo} </p>
            {/*<pre>{JSON.stringify(objeto)}</pre>*/}
        </>
    );
};

PrimeraApp.propTypes = {
    vamos:PropTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;