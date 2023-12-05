import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SureModal from ".";
import { MemoryRouter } from "react-router-dom";


describe("sure modal renders correctly",()=>{
  test('sure modal renders correctly', () => {
  render(
    <MemoryRouter>
      <SureModal open={true}  />
    </MemoryRouter>
  );

  const textElement = screen.getByText((content, element) => {
    return content.includes('Are you sure ?');
  });

  expect(textElement).toBeInTheDocument();

  const textElement1 = screen.getByText((content, element) => {
    return content.includes('You want to cancel this transfer');
  });

  expect(textElement1).toBeInTheDocument();

  const button=screen.getByRole('button',{name: 'Yes'});
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});

})