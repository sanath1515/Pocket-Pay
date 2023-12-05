import { render, screen, fireEvent } from "@testing-library/react";
import { BusinessActivity } from ".";
import "@testing-library/jest-dom";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

describe("BusinessActivity component", () => {
  it("should display the user name", () => {
    const Business=()=>{
      const [disabled,setDisabled]=useState(false)
      const [businessDetails, setBusinessDetails] = useState({
        businessName: "",
        registrationNo: "",
        registrationAddress: "",
        category: "",
        subCategory: "",
        size: "",
      });
      return (
        <BusinessActivity businessDetails={businessDetails} setBusinessDetails={setBusinessDetails} setDisabled={setDisabled}/>
      )
    }
    const {container}=render(< Business/>);
    const userName = screen.getByText("Help us verify your account faster");
    expect(userName).toBeVisible();

    const cat=container.querySelector("#Category") as HTMLSelectElement
    expect(cat).toBeInTheDocument()
    fireEvent.mouseDown(cat)
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    act(()=>{
      const options=screen.getAllByRole('option')
      expect(options[1]).toBeInTheDocument()
      fireEvent.click(options[1])

    })

    const subcat=container.querySelector("#Subcategory") as HTMLSelectElement
    expect(subcat).toBeInTheDocument()
    fireEvent.mouseDown(subcat)
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    act(()=>{
      const options=screen.getAllByRole('option')
      expect(options[1]).toBeInTheDocument()
      fireEvent.click(options[1])

    })

    const size=container.querySelector("#size") as HTMLSelectElement
    expect(size).toBeInTheDocument()
    fireEvent.mouseDown(size)
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    act(()=>{
      const options=screen.getAllByRole('option')
      expect(options[1]).toBeInTheDocument()
      fireEvent.click(options[1])

    })
  });

});
