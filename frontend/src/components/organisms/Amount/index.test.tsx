import React, { useState } from "react";
import { fireEvent, screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Amount from ".";

describe("Amount component", () => {
  test("renders the correct components with props", () => {
    render(<Amount />);

    expect(
      screen.getByText("How much would you like to transfer?")
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("You Send")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Receipients gets")).toBeInTheDocument();

    expect(screen.getByText("Low cost transfer fee:")).toBeInTheDocument();
    expect(screen.getByText("From 3.69GBP")).toBeInTheDocument();
    expect(screen.getByText("Guaranteed rate (24 hrs):")).toBeInTheDocument();
    expect(screen.getByText("1.20048")).toBeInTheDocument();
    expect(screen.getByText("Total amount:")).toBeInTheDocument();
    expect(screen.getByText("996.31 GBP")).toBeInTheDocument();
  });

  test("send field remders", () => {
    const Amountorg = () => {
      const [currency, setCurrency] = useState({ send: "", recieve: "" });
      return <Amount currency={currency} setCurrency={setCurrency} />;
    };
    const {container}=render(<Amountorg/>)
    const input = container.querySelector("#send") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    act(()=>{
      fireEvent.change(input,{target:{name:'send',value:'123'}});
    })
    act(()=>{
      fireEvent.change(input,{target:{name:'send',value:''}});
    })

    const endIcon=screen.getByTestId("iconsend")
    expect(endIcon).toBeInTheDocument()
    act(()=>{
    fireEvent.click(endIcon)
    })
    expect(screen.getByTestId('listbox')).toBeInTheDocument()
    const menuItem=container.querySelector('#GBP') as HTMLDivElement
    expect(menuItem).toBeInTheDocument()
    fireEvent.click(menuItem)


    const img=screen.getByTestId('modal-rate')
    expect(img).toBeInTheDocument()
    fireEvent.click(img)

  });
});
