
import { render, fireEvent, screen } from '@testing-library/react';
import { HomeHeader } from '.';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';


describe('HomeHeader component', () => {
  it('should render without errors', () => {
    render(<HomeHeader/>);
  });


  it('should display the user name', () => {
    render(<HomeHeader name='sk' />);
    const userName = screen.getByText("sk");
    expect(userName).toBeVisible();
  });


  it('should render onclick', () => {
    render(<HomeHeader />);
    const userName = screen.getByTestId('home-avatar')
    expect(userName).toBeInTheDocument()
    fireEvent.click(userName)
    
  })
});

