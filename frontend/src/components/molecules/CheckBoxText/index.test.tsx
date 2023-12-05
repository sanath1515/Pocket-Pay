import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react';
import CheckBoxText from ".";


describe("checkBoxTextTest",()=>{

    test("checkbox renders correctly",()=>{
        render(<CheckBoxText checked={false} variant={"h1"} text={""} onChange={()=>{console.log("checked")}} />)
        const checkTest = screen.getByRole("checkbox");
        expect(checkTest).toBeInTheDocument();
    })

    test("checkbox event checked",()=>{
        render(<CheckBoxText checked={true} variant={"h1"} text={""} onChange={()=>{console.log("unchecked")}} />)
        const check = screen.getByRole("checkbox");
        fireEvent.click(check)
        expect(check).toBeChecked();
    })
    test("text rendered correctly",()=>{
        render(<CheckBoxText checked={true} variant={"h1"} text={"remember me"} onChange={()=>{console.log("unchecked")}} />)
        const text=screen.getByText(/remember me/i);
        expect(text).toBeInTheDocument();
    })
    
})
