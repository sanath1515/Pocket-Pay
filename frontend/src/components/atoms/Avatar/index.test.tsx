import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Avatar from '.'
import React from 'react';

describe("avatarTest",()=>{
test("avatar renders correctly",()=>{
    render(<Avatar src="./assets/Avatar.svg" alt="PocketPayAvatar" />)
    const avatarTest = screen.getByRole("img")
    expect(avatarTest).toBeInTheDocument();
    const avatarTest1 = screen.getByAltText("PocketPayAvatar")
    expect(avatarTest1).toBeInTheDocument();
})
})

