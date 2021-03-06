import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba a CounterApp', () => { 

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe de mostrat CounterApp correctamente', () => { 


        expect( wrapper ).toMatchSnapshot();
        
     });

     test('Debe de mostrar el valor por defecto de 100', () => { 

        const value = 100;

        const wrapper = shallow(<CounterApp value={value}/>);

        const valueTexto = wrapper.find('h2').text().trim();

        expect( valueTexto ).toBe(`${value}`);
      });

      test('Debe de ingrementar con el boton de +1', () => {

       wrapper.find('button').at(0).simulate('click');

       const counterText = wrapper.find('h2').text().trim();

       expect( counterText ).toBe('11');
        
      });

      test('Debe de decrementar con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');
 
        const counterText = wrapper.find('h2').text().trim();
 
        expect( counterText ).toBe('9');
         
       });

       test('Debe de colocar el valor por defecto con el boton de reset', () => {
        const value = 105;

        const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe(`${value}`);

       })

 })