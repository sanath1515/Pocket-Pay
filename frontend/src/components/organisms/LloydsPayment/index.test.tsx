import { render,  screen } from "@testing-library/react";
import { LloydsPayment } from ".";
import "@testing-library/jest-dom";
import React from "react";

describe("LoydsPayment", () => {
  test("renders LloydsPayment component without crashing", () => {
    render(<LloydsPayment />);
  });
  test("displays correct heading", () => {
    render(<LloydsPayment />);
    const heading = screen.getByText("Pay from you Lloyds account");
    expect(heading).toBeInTheDocument();
  });
  test("displays correct payment details", () => {
    render(<LloydsPayment />);
    const paymentDetails = screen.getByText(
      /You'll be redirected to Lloyds, where you can securely log in to your own business account and approve the payment for your 75.38 GBP transfer./i
    );
    expect(paymentDetails).toBeInTheDocument();
  });
  test("displays safe and secure heading and details", () => {
    render(<LloydsPayment />);
    const safeAndSecureHeading = screen.getByText("Safe and Secure");
    expect(safeAndSecureHeading).toBeInTheDocument();

    const details1 = screen.getByText(
      "We'll use an encrypted end to end connection."
    );
    expect(details1).toBeInTheDocument();

    const details2 = screen.getByText(
      "Your bank will not share your login details with PocketPay or anyone else."
    );
    expect(details2).toBeInTheDocument();
  });
  test("displays continue to pay and pay manually buttons", () => {
    render(<LloydsPayment />);
    const continueToPayButton = screen.getByRole("button", {
      name: "Continue to pay",
    });
    expect(continueToPayButton).toBeInTheDocument();

    const payManuallyButton = screen.getByRole("button", {
      name: "Pay manually",
    });
    expect(payManuallyButton).toBeInTheDocument();
  });
});
