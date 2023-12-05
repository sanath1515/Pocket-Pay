import { render } from '@testing-library/react';
import TextDividerIcon from './index';
import '@testing-library/jest-dom';
import React from 'react';

describe('TextDividerIcon', () => {
  it('should render the two text components and an image', () => {
    const props = {
      text1: 'Text 1',
      text2: 'Text 2',
      src: 'image.png',
      color: 'primary',
      divsx: {},
    };
    const { getByText, getByRole } = render(<TextDividerIcon {...props} />);
    const text1 = getByText('Text 1');
    const text2 = getByText('Text 2');
    const image = getByRole('img');
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.png');
  });
});
