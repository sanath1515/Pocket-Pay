import { render, fireEvent } from '@testing-library/react';
import ButtonImage from '.';
import "@testing-library/jest-dom";
import React from 'react';
  
describe('ButtonImage component', () => {
    
    test('buttonImage comonent renders correctly', () => {
        render(<ButtonImage src={''} variant={'text'} buttonText={'continur'}/>)
    });
})
  