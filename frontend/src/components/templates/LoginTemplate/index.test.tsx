import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from "react";
import { LoginTemplate } from '.';
import Loginpage from '../../../pages/LoginPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../state/store';

describe('Template', () => {
  it('renders the left children and main content', () => {
    render(<Provider store={store} ><MemoryRouter><LoginTemplate children={<Loginpage/>} /></MemoryRouter></Provider>);

  });


});
