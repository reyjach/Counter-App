import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('prueba en PrimeraApp', () => {
  /*  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => { 

        const vamos = 'Hola, soy Goku';


        const { getByText } = render( <PrimeraApp vamos = 'Hola, soy Goku'/> );

        expect( getByText(vamos)).toBeInTheDocument();

    })
*/

test('Debe de mostrar PrimeraApp correctamente', () => { 

    const vamos = 'Hola, soy Goku';

    const wrapper = shallow(<PrimeraApp vamos = {vamos}/>);

    expect( wrapper ).toMatchSnapshot();
 });

 test('Debe de mostrar el subtitulo enviado por props', () => { 

    const subtitulo = 'Soy un subtitulo';

    const vamos = 'Hola, soy Goku';

    const wrapper = shallow(
        <PrimeraApp 
            vamos = {subtitulo}
            subtitulo = {subtitulo}
            />
    );
    const textoParrafo = wrapper.find('p').text();

    expect( textoParrafo ).toBe( subtitulo );
  })
})