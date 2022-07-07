import { getImagen } from "../../bases/11-async-await"


describe('pruebas con async await', () => { 
    test('Debe de retornar la url con la imagen', async() => { 
        const url = await getImagen();

        expect( url.includes('https://')).toBe(true);
     })
 })