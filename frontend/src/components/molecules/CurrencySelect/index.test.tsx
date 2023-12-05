import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import CurrencySelect from ".";
import React from "react";

describe("CurrencySelect", () => {
  const countries = [
    {
      value: "Andorra",
      label: "Andorra",
      img: "./Assets/icons/c1.svg",
      code: "GBP",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
      img: "./Assets/icons/c2.svg",
      code: "EUR",
    },
    {
      value: "Austria",
      label: "Austria",
      img: "./Assets/icons/c3.svg",
      code: "AUD",
    },
    {
      value: "India",
      label: "India",
      img: "./Assets/icons/c4.svg",
      code: "INR",
    },
  ];
  test("renders CurrencySelect component without crashing", () => {
    render(<CurrencySelect countries={countries} hidden={true} />);
  });

  test("input field placeholder text is set correctly", () => {
    const placeholder = "Select country";
    const { getByPlaceholderText } = render(
      <CurrencySelect placeholder={placeholder} countries={countries} />
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });



  
});
