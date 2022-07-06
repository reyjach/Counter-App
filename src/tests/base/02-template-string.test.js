
import { getSaludo } from '../../bases/02-template-string';

describe('prueba en 02-template-string.js', () => { 
    test('getSaludo debe de retornar Hola Orlando', () => { 

        const nombre = 'Orlando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe(`Hola ${nombre}`);

     })
     test('getSaludo debe de retornar Hola Carlos sin pasarle argumentos', () => { 
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');
      })
 })