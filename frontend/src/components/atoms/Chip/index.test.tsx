import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChipComponent } from '.';
import "@testing-library/jest-dom";
import React from 'react';


describe('ChipComponent', () => {
  test('renders chip with correct label', () => {
    render(<ChipComponent label="new" variant={'outlined'} />);
    const test1 = screen.getByTestId('chip');
    expect(test1).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<ChipComponent label="Click me" onClick={onClick} variant={'outlined'} />);
    const test1 = screen.getByTestId('chip');
    userEvent.click(test1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('applies given variant', () => {
    const variant = 'outlined';
    render(<ChipComponent label="My Chip" variant={variant} />);
    const test1 = screen.getByTestId('chip');
    expect(test1).toHaveClass(`MuiChip-outlined`);
  });

  test('applies custom styles', () => {
    const sx = { backgroundColor: 'red', width: '100px', height: '50px' };
    render(<ChipComponent label="My Chip" sx={sx} variant={'outlined'} />);
    const test1 = screen.getByTestId('chip');
    expect(test1).toHaveStyle({ backgroundColor: 'red', width: '100px', height: '50px' });
  });
});
