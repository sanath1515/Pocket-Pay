import { render, screen } from '@testing-library/react';
import IconTextRadio from '.';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe('IconTextRadio component', () => {
  it('renders the component with image, title, text and radio', () => {
    render(<IconTextRadio src="https://example.com/image.png" title="Title" text="Text" radiosize="medium" radioelement/>);
    
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
  
  it('renders the component without optional props', () => {
    render(<IconTextRadio src="https://example.com/image.png" radiosize="medium" radioelement/>);
    
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByText('Title')).toBeNull();
    expect(screen.queryByText('Text')).toBeNull();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
  
  // it('renders the component with specified image height and width', () => {
  //   render(<IconTextRadio src="https://example.com/image.png" imgheight="50px" imgwidth="50px" radiosize="medium" />);
    
  //   expect(screen.getByRole('img')).toHaveAttribute('height', '50px');
  //   expect(screen.getByRole('img')).toHaveAttribute('width', '50px');
  // });
  
});
