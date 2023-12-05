
import { render, fireEvent } from "@testing-library/react";
import React, { useState } from "react"
import { SelectingBank } from ".";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import {  screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe("SelectingBank", () => {

  it("should render Lloyds payment component when lylodsPayment prop is true", () => {
    render(
      <MemoryRouter> 
        <SelectingBank lylodsPayment={true} />
      </MemoryRouter>
    );

    const lloydsPaymentComponent = screen.getByTestId("lloyds-payment");
    expect(lloydsPaymentComponent).toBeInTheDocument();
  });
  it("should component when lylodsPayment prop is true", () => {
    render(
      <MemoryRouter> 
        <SelectingBank lylodsPayment={false} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button",{name: "Cancel the transfer"});
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    const Nobutton=screen.getByRole("button",{name: "No"})
    expect(Nobutton).toBeInTheDocument();
    fireEvent.click(Nobutton)
  });
  test("should render correctly when lylodsPayment prop is false", () => {
    const TestComponent = () => {
      const [lylodsPayment, setLylodsPayment] = useState(false);
      console.log(lylodsPayment)
      return (
        <MemoryRouter> 
          <SelectingBank lylodsPayment={false} setLylodsPayment={setLylodsPayment} />
        </MemoryRouter>
      );
    };

    render(<TestComponent />);

      const button = screen.getByTestId("Lloyds");
      expect(button).toBeInTheDocument();
      act(()=>{
      fireEvent.click(button);

      })
  });
});
