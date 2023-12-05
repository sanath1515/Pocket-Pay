import { render, fireEvent, screen } from "@testing-library/react";
import { PaymentOptions } from ".";
import "@testing-library/jest-dom";
import React from "react";
import { act } from "react-dom/test-utils";

describe("PaymentOptions", () => {
  test("renders PaymentOptions component without crashing", () => {
    render(<PaymentOptions />);
  });
  test("payment option component renders the icons", () => {
    render(<PaymentOptions />);
    const debitCardRadio = screen.getAllByRole("img");
    expect(debitCardRadio).toHaveLength(4);
    expect(debitCardRadio[0]).toBeInTheDocument();
  });
  test("payment option text should be displayed correctly", () => {
    render(<PaymentOptions />);
    expect(screen.getByText("Choose your transfer type")).toBeInTheDocument();
    expect(screen.getByText("Fast and easy transfer")).toBeInTheDocument();
    expect(screen.getByText("Debit card")).toBeInTheDocument();
    expect(screen.getByText("Credit card")).toBeInTheDocument();
    expect(screen.getByText("Low cost transfer")).toBeInTheDocument();
    expect(
      screen.getByText("Transfer from your bank account")
    ).toBeInTheDocument();
    expect(screen.getByText("Account transfer")).toBeInTheDocument();
    expect(screen.getByText("SWIFT Transfer")).toBeInTheDocument();
  });
  test("payment options with checked values",()=>{
    const handleRadioChange = jest.fn();

    const {container} = render(<PaymentOptions onRadioChange={handleRadioChange} />);
    const paymentmethod=screen.getAllByTestId("icon-text-radio")
    paymentmethod.forEach(element=>{
      expect(element).toBeInTheDocument()

    })

    const radio1=screen.getByTestId("debitcard-pay")
    expect(radio1).toBeInTheDocument()
    act(()=>{
    fireEvent.change(radio1)

    })
    const radio2=screen.getByTestId("lloydsBank-pay")
    expect(radio2).toBeInTheDocument()
    act(()=>{
    fireEvent.change(radio1)

    })

    const radio = container.querySelector("#radio") as HTMLInputElement
    expect(radio).toBeInTheDocument()
    fireEvent.change(radio)
  })

});
