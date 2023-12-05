import { act, fireEvent, render, screen } from '@testing-library/react';
import { SignUp } from './index';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

describe('SignUp', () => {
  const mockStore = configureStore([]);
  const initialState = {
    users: {},
  };
  const store = mockStore(initialState);

  it('should render a "Create your PocketPay account" header', () => {
    render(<Provider store={store} ><MemoryRouter><SignUp /></MemoryRouter></Provider>);
    const header = screen.getByText('Create your PocketPay account');
    expect(header).toBeInTheDocument();
  });

  it('should render a "Next" button with a primary color', () => {
    render(<Provider store={store} ><MemoryRouter><SignUp /></MemoryRouter></Provider>);
    const button = screen.getByRole('button', { name: 'Sign up' });
    expect(button).toHaveClass('MuiButton-containedPrimary');
    const b1=screen.getByRole("button", {name:"Sign up"});
    fireEvent.click(b1);
  });

  it('should render "Terms of use" and "Privacy Policy" buttons', () => {
    render(<Provider store={store} ><MemoryRouter><SignUp /></MemoryRouter></Provider>);
    const termsButton = screen.getByRole('button', { name: 'Terms of use' });
    const privacyButton = screen.getByRole('button', { name: 'Privacy Policy' });
    expect(termsButton).toBeInTheDocument();
    expect(privacyButton).toBeInTheDocument();
    const b1=screen.getByText("Log in");
    fireEvent.click(b1);
    
  });

  it('should render a "Log in" button', () => {
    const {container}=render(<Provider store={store} ><MemoryRouter><SignUp /></MemoryRouter></Provider>);
    // const button = screen.getByRole('button', { name: 'Log in' });
    // expect(button).toHaveClass('MuiButton-textPrimary');
    const email=container.querySelector('#email') as HTMLInputElement
    expect(email).toBeInTheDocument()
    act(()=>{
      fireEvent.change(email,{target:{value:"abhi@gmail.com"}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:"abhicom"}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:""}})
    })
  });
});