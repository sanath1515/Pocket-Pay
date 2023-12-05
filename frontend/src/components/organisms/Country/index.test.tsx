import { fireEvent, render, screen } from "@testing-library/react";
import { SelectCountry } from ".";
import "@testing-library/jest-dom";
import React from "react";

describe("SelectCountry", () => {
  test("renders SelectCountry component without crashing", () => {
    render(<SelectCountry />);
  });
  test("renders country options correctly", () => {
  const {container} = render(<SelectCountry />);
   let country = container.querySelector('#country') as HTMLDivElement     
   expect(country).toBeInTheDocument()
   fireEvent.mouseDown(country);
   expect(screen.getByRole("listbox")).not.toEqual(null);

   const options = screen.getAllByRole("option");
    fireEvent.mouseDown(options[1]);
    // options[1].click();

  });
});
