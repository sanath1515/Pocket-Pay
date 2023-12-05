import { fireEvent, render, screen } from '@testing-library/react';
import { ConformationModal } from '.';
import React from 'react';
import "@testing-library/jest-dom/extend-expect";

describe("ConformationModal", () => {
  test("should render with OK button", () => {
    const onClick = jest.fn();
    const { getByText } = render(<ConformationModal onClick={onClick} />);
    expect(getByText("OK")).toBeInTheDocument();
  });

  
});
