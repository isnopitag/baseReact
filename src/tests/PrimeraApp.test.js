import React from 'react';
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    // test('Debe regresar hola soy goku', () => {
    //     const saludo = 'Hola, soy Goku';

    //     const { getByText} = render(<PrimeraApp saludo = { saludo}/>);

    //     expect( getByText(saludo) ).toBeInTheDocument();
        
    // })

    test('debe de mostrar <PrimeraApp/>', () => {
        const saludo = 'hola soy goku'
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>)

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'hola soy goku'
        const subtitulo = 'soy un subtitulo'

        const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subtitulo}/>)

        const textParrafo = wrapper.find('p').text();
        
        expect(textParrafo).toBe(subtitulo);

    })
    
    
    
})
