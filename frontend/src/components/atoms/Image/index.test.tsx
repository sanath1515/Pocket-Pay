import { render, screen } from "@testing-library/react"
import  Image  from "."
import '@testing-library/jest-dom'
import React from 'react';

describe('Image Test',()=>{

    it('image renders correctly',()=>{
        render(<Image src={"./assets/Background.svg"}/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })


})


