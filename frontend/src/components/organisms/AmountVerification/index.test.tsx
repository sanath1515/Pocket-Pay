import { act, fireEvent, render, screen } from "@testing-library/react";
import { Verification } from ".";
import "@testing-library/jest-dom";
import React, { useState } from "react";

describe("Verification component", () => {
  it("renders without errors", () => {
    render(<Verification />);
  });
  it("renders input", () => {
    const Verify = () => {
      const [purpose, setPurpose] = useState("");
      return <Verification purpose={purpose} setPurpose={setPurpose} />;
    };

    const { container } = render(<Verify />);

    let input = container.querySelector("#verification-input") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.mouseDown(input);
    expect(screen.getByRole("listbox")).not.toEqual(null);
    act(() => {
      const options = screen.getAllByRole("option");
      fireEvent.mouseDown(options[1]);
    });
    act(() => {
      const options = screen.getAllByRole("option");
      fireEvent.click(options[1]);
    });
  });
});
