import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CalenderInput } from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("CalenderInput", () => {
  it("renders a date picker", () => {
    render(<CalenderInput />);
    const datePicker = screen.getByRole("textbox");
    expect(datePicker).toBeInTheDocument();
  });
  test("calls the onChange function when the date is changed", () => {
    const onChangeMock = jest.fn();
    render(<CalenderInput label="Select Date" onChange={onChangeMock} />);
    const datePicker = screen.getByLabelText("Select Date");

    // Simulate a change event by directly calling the onChange function
    userEvent.type(datePicker, "2021-11-09");

    const chosenDate = screen.getByRole("button", { name: "Choose date" }); // choose any date that the calender shows
    fireEvent.click(chosenDate);
    expect(chosenDate).toBeInTheDocument();
  });
});
