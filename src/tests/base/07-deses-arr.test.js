import { retornaArreglo } from '../../bases/07-deses-arr'


describe('pruebas de Desestructuracion', () => { 
    test('debe de retornar un string y un numero', () => { 
        //const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
            expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
            expect(typeof numeros).toBe('number');
     })
 })