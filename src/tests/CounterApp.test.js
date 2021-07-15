import React from 'react';
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp />)

    beforeEach( () =>{
        wrapper = shallow( <CounterApp />) 
    })

    test('debe de mostrar <CounterApp/>', () => {
        

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de el valor por defecto ', () => {

        const wrapper = shallow( <CounterApp value={ 100 } />)

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe(`100`);

    })

    test('Debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    })

    test('Debe de decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    })


    test('Debe de colocar el valor por defecto con el boton de reset', () => {
        const wrapper = shallow( <CounterApp value={ 105 } />)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
    
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

    })
    

})
