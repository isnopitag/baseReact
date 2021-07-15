import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en heres', () =>{
    
    test('debe de retonar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroreData = heroes.find( h => h.id === id );

        expect(heroe).toEqual(heroreData);
    })

    test('debe de retonar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('debe de retonar el arreglo de heroes de DC', () => {
        
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === 'DC' );

        expect(heroes).toEqual(heroesData);
    })

    test('debe de retonar el arreglo de heroes de Marvel', () => {
        
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);

        const arrlength = 2

        expect(heroes.length).toBe(arrlength);
    })
    
})