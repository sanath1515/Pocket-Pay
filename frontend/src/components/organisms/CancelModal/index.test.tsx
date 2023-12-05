import { render, fireEvent,screen } from "@testing-library/react";
import CancelModal from ".";
import React from "react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("CancelModal", () => {
  it("should render Cancel transfer #3628287220 as title", () => {
    render(<CancelModal />);
  });
  it("should render Cancel transfer input field", () => {
   render(<CancelModal />);
    const view=screen.getByText('An existing account')
    fireEvent.click(view);

      let cancel=screen.getAllByTestId('cancel-transfer')
      cancel.forEach((element: any) => {
        expect(element).toBeInTheDocument()
        
      });
      cancel.forEach((element: any) => {
        act(()=>{
          fireEvent.change(element)
        })
      });
      
  });
  
 
})