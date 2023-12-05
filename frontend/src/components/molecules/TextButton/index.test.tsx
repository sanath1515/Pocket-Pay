import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TextButton } from ".";
import "@testing-library/jest-dom/extend-expect";
describe("TextButton", () => {
  test("renders correctly with outlined variant", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <TextButton
        text="Hello"
        variant="outlined"
        buttonName="log in"
        onClick={onClick}
      />
    );
    const button = getByText("log in");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button.className).toContain("MuiButton-outlined");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("renders correctly with contained variant", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <TextButton
        text="Hello"
        variant="contained"
        buttonName="log in"
        onClick={onClick}
      />
    );
    const button = getByText("log in");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button.className).toContain("MuiButton-contained");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("renders correctly with text variant", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <TextButton
        text="Hello"
        variant="text"
        buttonName="Log in"
        onClick={onClick}
      />
    );
    const button = getByText("Log in");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toHaveClass("outlined");
    expect(button).not.toHaveClass("contained");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
