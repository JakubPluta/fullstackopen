import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Notification from './Notification'


describe('<Notification />', () => {


    test('renders notification if message exists', () => {
        const component = render(
            <Notification message='message example' />
          )
        
        expect(component.container.querySelector('.error').textContent).toEqual('message example')


    })


})