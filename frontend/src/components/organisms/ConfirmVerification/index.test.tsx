import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ConfirmVerification } from ".";
import React, { useState } from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("ConfirmVerification", () => {
  const mockProps = {
    Heading: "Test Heading",
    Info: "Test Info",
    Id: "Test ID",
    ButtonName: "Test Button",
  };

  test("renders component with all fields and button", () => {
    render(
      <ConfirmVerification
        Id1={""}
        Id2={""}
        firstName={""}
        lastName={""}
        {...mockProps}
      />
    );
    const addperson = screen.getByTestId("addButton");
    fireEvent.click(addperson);
    expect(screen.getByTestId("another-person")).toBeInTheDocument();
    const textfields = screen.getAllByRole("textbox");
    textfields.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    const crossImg = screen.getByTestId("cross");
    expect(crossImg).toBeInTheDocument();
    fireEvent.click(crossImg);
  });

  test("should reder", () => {
    const Fun = () => {
      const [director, setDirector] = useState([]);
      const role = "director";
      return (
        <ConfirmVerification
          Heading={"Directors"}
          Info={"hiii"}
          Id1={"director1"}
          Id2={"director2"}
          ButtonName={"add director"}
          directors={director}
          setDirectors={setDirector}
          role={role}
        />
      );
    };

    const {container} =render(<Fun/>)

    const fname=container.querySelector("#fname") as HTMLInputElement
    expect(fname).toBeInTheDocument()
    fireEvent.change(fname,{target:{value:"abc"}})
    fireEvent.change(fname,{target:{value:""}})
    
    const lname=container.querySelector("#lname") as HTMLInputElement
    expect(lname).toBeInTheDocument()
    fireEvent.change(lname,{target:{value:"abc"}})
    fireEvent.change(lname,{target:{value:""}})
    
    const country=container.querySelector("#country") as HTMLInputElement
    expect(country).toBeInTheDocument()
    fireEvent.mouseDown(country)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    
    act(()=>{
      const options=screen.getAllByRole('option')
      fireEvent.click(options[1])
    })

    const b1=screen.getByRole('button',{name:'add director'})
    expect(b1).toBeInTheDocument()
    fireEvent.click(b1)

    const fname1=container.querySelector("#fname1") as HTMLInputElement
    expect(fname1).toBeInTheDocument()
    fireEvent.change(fname1,{target:{value:"abc"}})
    fireEvent.change(fname1,{target:{value:""}})
    
    const lname1=container.querySelector("#lname1") as HTMLInputElement
    expect(lname1).toBeInTheDocument()
    fireEvent.change(lname1,{target:{value:"abc"}})
    fireEvent.change(lname1,{target:{value:""}})

    const c1=container.querySelector("#c1") as HTMLInputElement
    expect(c1).toBeInTheDocument()
    fireEvent.mouseDown(c1)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    
    act(()=>{
      const options=screen.getAllByRole('option')
      fireEvent.click(options[1])
    })

  });
});
