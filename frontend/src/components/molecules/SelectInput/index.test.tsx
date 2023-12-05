import "@testing-library/jest-dom";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectInput } from ".";

const selectOptions = [
  { label: 'Option', value: 'Option', img: './Assets/Icons/c3.svg' },
  { label: 'Optio', value: 'Optio', img: './Assets/Icons/c3.svg' },
  { label: 'Options', value: 'Options', img: './Assets/Icons/c3.svg' },
];

describe('SelectInput', () => {

  
  it('calls handleChange function when an option is selected', () => {
    const handleChange = jest.fn();
    render(<SelectInput selectfield={selectOptions} handleChange={handleChange} variant={'outlined'} select />);
    const selectInput = screen.getByRole('button');
    fireEvent.mouseDown(selectInput);
    const option2 = screen.getByText('Optio');
    fireEvent.click(option2);
  });

  it('renders custom menu items', () => {
    render(<SelectInput variant={'outlined'} select titlemenu menuItem={<div></div>}/>)
  })
});
