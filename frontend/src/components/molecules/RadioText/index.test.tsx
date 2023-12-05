import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioText from '.';
import "@testing-library/jest-dom";

describe('RadioText', () => {
  const label = 'Test Label';

  test('renders the label text', () => {
    render(<RadioText title={label} size={'small'}  />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });


});
