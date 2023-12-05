import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SendToSomeone } from ".";
import React, { useState } from "react";

describe("SendToSomeone", () => {
  test("renders SendToSomeone component", () => {
    render(<SendToSomeone />);
  });

  test("displays the correct title", () => {
    render(<SendToSomeone />);
    const title = screen.getByText(/send to someone/i);
    expect(title).toBeInTheDocument();
  });

  test("checkbox changes when clicked", () => {
    render(<SendToSomeone />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
  });

  test("select input field renders account type options and change functionality", () => {
    const Send = () => {
      const [recipientData, setRecipientData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        accno: "",
        IFSC: "",
        acctype: "",
      });

      return (
        <SendToSomeone
          recipientData={recipientData}
          setRecipientData={setRecipientData}
        />
      );
    };
    const { container } = render(<Send />);
    let sendtosomeone = container.querySelector(
      "#sendtosomeone"
    ) as HTMLDivElement;
    expect(sendtosomeone).toBeInTheDocument();

    let vatSelectInput = container.querySelector(
      "#sendtosomeone"
    ) as HTMLInputElement;

    expect(vatSelectInput).toBeInTheDocument();
    fireEvent.mouseDown(vatSelectInput);
    expect(screen.getByRole("listbox")).not.toEqual(null);

    act(() => {
      const options = screen.getAllByRole("option");
      fireEvent.click(options[1]);
    });

     
    const email=container.querySelector("#email") as HTMLInputElement;
    expect(email).toBeInTheDocument()
    act(()=>{
      fireEvent.change(email)
    })
    act(()=>{
      fireEvent.change(email,{target:{value:""}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:'skcnj'}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:'shaik@gmail.com'}})
    })


    const firstname=container.querySelector("#firstname") as HTMLInputElement;
    expect(firstname).toBeInTheDocument()

    act(()=>{
      fireEvent.change(firstname,{target:{value:"shaik",index:1}})
    })

    const lastname=container.querySelector("#lastname") as HTMLInputElement;
    expect(lastname).toBeInTheDocument()

    act(()=>{
      fireEvent.change(lastname,{target:{value:"shaik",index:2}})
    })
    const IFSC=container.querySelector("#IFSC") as HTMLInputElement;
    expect(IFSC).toBeInTheDocument()

    act(()=>{
      fireEvent.change(IFSC,{target:{value:"shaik"}})
    })
    const accno=container.querySelector("#accno") as HTMLInputElement;
    expect(accno).toBeInTheDocument()

    act(()=>{
      fireEvent.change(accno,{target:{value:"12345567",index:0}})
    })
    act(()=>{
      fireEvent.change(accno,{target:{value:"",index:0}})
    })
  });
});
