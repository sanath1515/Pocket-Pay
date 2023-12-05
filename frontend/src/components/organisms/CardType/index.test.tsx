import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardType from ".";
import { act } from "react-dom/test-utils";


describe("Card Type renders correctly",()=>{
  test("component renders correctly",()=>{
    const handleRadioButtonChange = (value: any) => {
      console.log(value);
    };
    render(
      <CardType onRadioButtonChange={handleRadioButtonChange} />
    );
    const textElement = screen.getByText("NEW CARD");
    expect(textElement).toBeInTheDocument();

    const textElement1 = screen.getByText("SAVED CARD");
    expect(textElement1).toBeInTheDocument();

    const dividerElement = screen.getByRole("separator")
    expect(dividerElement).toBeInTheDocument();

    const radioElements = screen.getAllByRole("radio");
    expect(radioElements).toHaveLength(2);
  
    radioElements.forEach((radio) => {
      expect(radio).toBeInTheDocument();
      act(()=>{
        fireEvent.click(radio)

      })
    });
  
    const inputElements = screen.getAllByPlaceholderText("CVV / CVC");
    expect(inputElements).toHaveLength(2);
  
    inputElements.forEach((input) => {
      expect(input).toBeInTheDocument();
    });

    

    const imageElements=screen.getAllByRole("img");
    expect(imageElements).toHaveLength(2);

    })

})