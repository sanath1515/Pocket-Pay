import { render, screen } from '@testing-library/react';
import Template from '.';
import '@testing-library/jest-dom'
import React from "react";

describe('Template', () => {
  it('renders the left children and main content', () => {
    const leftChildren = <div data-testid="left">Left</div>;
    const main = <div data-testid="main">Main</div>;
    render(<Template leftChildren={leftChildren} main={main} />);

    const leftElement = screen.getByTestId('left');
    const mainElement = screen.getByTestId('main');

    expect(leftElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });

  it('renders the heading and main content', () => {
    const heading = <div data-testid="heading">Heading</div>;
    const main = <div data-testid="main">Main</div>;
    render(<Template Heading={heading} main={main} />);

    const headingElement = screen.getByTestId('heading');
    const mainElement = screen.getByTestId('main');

    expect(headingElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });

});
