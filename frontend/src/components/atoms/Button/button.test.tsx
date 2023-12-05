import { fireEvent, render,screen } from "@testing-library/react"
import Button from "."
import '@testing-library/jest-dom'
import React from 'react';

describe("buttonTest",()=>{
    test("button renders correctly",()=>{
        render(<Button name="submit" variant="text" color="primary"/>)
        const buttonTest = screen.getByRole("button");
        expect(buttonTest).toBeInTheDocument();
    });
    
    test("button label renders correctly",()=>{
        render(<Button variant="outlined" color="primary" name="continue" />)
        const buttonLabel = screen.getByText("continue");
        expect(buttonLabel).toBeInTheDocument();
    
    });
    test("button clicked renders correctly",()=>{
        render(<Button name="submit" variant="text" color="primary"/>)
        const btn = screen.getByRole("button");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument();
    });
})
