import { Chip } from '@mui/material';
import { getByAltText, render } from '@testing-library/react';
import { NavItem } from '.';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';


describe('NavItem', () => {
  const props = {
    src: './assets/home.svg',
    alt: 'placeholder image',
    variant: 'caption',
    text: 'Home',
    label: 'new',
    chip: <Chip label="new" />,
    onClick: jest.fn(),
  };

  it('renders correctly with mandatory props', () => {
    const { getByText } = render(<NavItem variant={props.variant} text={props.text} />);
    const textElement = getByText(props.text);
    expect(textElement).toBeInTheDocument();
  });

});
