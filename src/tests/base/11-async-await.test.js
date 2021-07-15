import { getImagen } from "../../base/11-async-await"

describe('Pruebas con Async await y fetch', () => {
    test('debe retornar la Url de la imagen',async  () => {
            const url = await getImagen();
            expect(url.includes('ht') ).toBe(true)
        
    })
    
})
