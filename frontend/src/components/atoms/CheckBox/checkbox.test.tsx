import { fireEvent, render, screen } from "@testing-library/react"
import CheckBox from "."
import '@testing-library/jest-dom'
import React from 'react';


describe("checkBoxTest",()=>{

    test("checkbox renders correctly",()=>{
        render(<CheckBox checked={false} />)
        const checkTest = screen.getByRole("checkbox");
        expect(checkTest).toBeInTheDocument();
    })

    test("checkbox event checked",()=>{
        render(<CheckBox checked={true} />)
        const check = screen.getByRole("checkbox");
        fireEvent.click(check)
        expect(check).toBeChecked();
    })
    
})
