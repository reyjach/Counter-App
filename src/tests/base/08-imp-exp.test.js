import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de heroes', () => { 
    test('debe de retornar un heroe por id', () => { 
        const id = 1;

        const heore = getHeroeById(id);

        const heroeData = heroes.find( (h) => h.id === id);

        expect(heore).toEqual(heroeData);
     });

     test('debe de retornar undefined si Heroe no existe', () => { 
        const id = 10;

        const heore = getHeroeById(id);


        expect(heore).toBe(undefined);
      });

      test('debe de retornar los arreglos de DC', () => { 
        const owner = 'DC';

        const heore = getHeroesByOwner(owner);

        const heroeData = heroes.filter( (h) => h.owner === owner);

        expect(heore).toEqual(heroeData);
      });

      test('debe de retornar los Heroes de Marvel', () => { 
        const owner = 'Marvel';

        const heore = getHeroesByOwner(owner);

        

        expect(heore.length).toBe(2);

       })
 }) 