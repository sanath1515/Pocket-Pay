import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SetPassword } from ".";
import userEvent from "@testing-library/user-event";
import React from "react";

const Eye = "./assets/icons/eye.svg";
const EyeOff = "./assets/icons/eye-off.svg";

describe("setPassword", () => {
  test("renders without errors", () => {
    render(<SetPassword />);
  });
  test("displays the 'Create your password' text", () => {
    render(<SetPassword />);
    expect(screen.getByText("Create your password")).toBeInTheDocument();
  });
  test("displays the password input field", () => {
    render(<SetPassword />);
    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });
  test("changes input field type when eye icon is clicked", () => {
    render(<SetPassword />);
    const inputField = screen.getByPlaceholderText("Enter your password");
    const eyeIcon = screen.getByRole("img");

    // check initial input field type
    expect(inputField).toHaveAttribute("type", "password");

    // click eye icon to change input field type
    userEvent.click(eyeIcon);
    expect(inputField).toHaveAttribute("type", "text");

    // click eye icon again to revert input field type
    userEvent.click(eyeIcon);
    expect(inputField).toHaveAttribute("type", "password");
  });
});
