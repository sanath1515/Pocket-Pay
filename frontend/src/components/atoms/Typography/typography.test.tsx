import React from 'react';
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import TypographyComponent from '.';

describe("Typography tests",()=>{
    it("renders the typography component",()=>{
        render(<TypographyComponent>Hello world</TypographyComponent>);
        const text=screen.getByText(/Hello world/i);
        expect(text).toBeInTheDocument();
    })
})