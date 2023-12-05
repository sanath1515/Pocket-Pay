import React from "react";
import {  render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeMainHeading } from ".";

describe("AccountType component", () => {
  test("renders the correct components", () => {
    render(<HomeMainHeading name="789d" src="dlj" status="pending"  recievingAmount="100" sendingAmount="1000"/>);
  });
  test("renders", () => {
    render(<HomeMainHeading />);
  });
  
  
});
