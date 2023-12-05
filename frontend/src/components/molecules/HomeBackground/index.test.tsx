import {  render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react';
import HomeBackground from ".";


describe("HomeBackgroundTest",()=>{

    test("Image renders correctly",()=>{
        render(<HomeBackground variant={"h1"} text={"Activity"} src="./assets/Background.svg" />)
        const checkTest = screen.getByRole("img");
        expect(checkTest).toBeInTheDocument();
    })
    test("text rendered correctly",()=>{
        render(<HomeBackground variant={"h1"} text={"Transactions"} />)
        const text=screen.getByText(/Transactions/i);
        expect(text).toBeInTheDocument();
    })
    
})
