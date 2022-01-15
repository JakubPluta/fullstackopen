import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import Note from './Note'
import { render, fireEvent } from '@testing-library/react'

test('renders content', ()=> {
    const note = {
        content: 'this is sample note',
        important: true
    }
    const component = render(
        <Note note={note} />
    )

    expect(component.container).toHaveTextContent('this is sample note')
})


test('clicking the button calls event handler once', () => {
    const note = {
      content: 'Component testing is done with react-testing-library',
      important: true
    }
  
    const mockHandler = jest.fn()
    const component = render(
        <Note note={note} toggleImportance={mockHandler}/>
    )

    component.debug()
    
    const button = component.getByText('make not important')
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
})