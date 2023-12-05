import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Recipient } from ".";
import React from "react";

describe("Recipient", () => {
  test("renders the title", () => {
    render(<Recipient />);
    const title = screen.getByText("Who are you sending money to?");
    expect(title).toBeInTheDocument();
  });

  test("renders all recipient options", () => {
    render(<Recipient />);
    const options = screen.getAllByRole("img");
    expect(options).toHaveLength(3);
  });

  test("calls handleClick when an option is clicked", () => {
    render(<Recipient />);
    const option = screen.getAllByTestId("icon-text-radio");
    option.forEach((option) => {
      fireEvent.click(option);
    });
    
  });
  
  
});
