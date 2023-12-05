import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeMain } from ".";
import { MemoryRouter } from "react-router-dom";

describe("HomeMain component", () => {
  test("renders the correct components", () => {
    render(<MemoryRouter><HomeMain  /></MemoryRouter>);
    const closemodal= screen.getByTestId('opensharemodal')
    fireEvent.click(closemodal)

  });
  test("renders the correct", () => {
    render(<MemoryRouter><HomeMain transferStatus="Sending" /></MemoryRouter>);
    const cancelmodal= screen.getByTestId('cancelButton');
    fireEvent.click(cancelmodal)
  });

  
});
