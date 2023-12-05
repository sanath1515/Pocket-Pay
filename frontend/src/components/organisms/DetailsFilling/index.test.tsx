import { fireEvent, render, screen } from "@testing-library/react";
import { DetailsFilling } from ".";
import React, { useState } from "react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("DetailsFilling", () => {
  it("renders correct text", () => {
    const Details = () => {
      const [disabled, setDisabled] = useState(false);
      const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        accountType: "",
        country: "",
        phno: "",
        password: "",
        dob: "",
        address: "",
        pincode: "",
        city: "",
      });

      return (
        <DetailsFilling
          userData={userData}
          setUserData={setUserData}
          setDisabled={setDisabled}
        />
      );
    };

    const { container } = render(<Details />);
    expect(screen.getByText("Fill in your details")).toBeInTheDocument();
    const input1 = container.querySelector("#firstname") as HTMLInputElement;
    act(() => {
      expect(input1).toBeInTheDocument();
      fireEvent.change(input1, { target: { value: "abcd" } });
    });
    const input2 = container.querySelector("#lastname") as HTMLInputElement;
    act(() => {
      expect(input2).toBeInTheDocument();
      fireEvent.change(input2, { target: { value: "abcd" } });
    });
    const input3 = container.querySelector("#homeaddress") as HTMLInputElement;
    act(() => {
      expect(input3).toBeInTheDocument();
      fireEvent.change(input3, { target: { value: "abcd" } });
    });
    const input4 = container.querySelector("#city") as HTMLInputElement;
    act(() => {
      expect(input4).toBeInTheDocument();
      fireEvent.change(input4, { target: { value: "abcd" } });
    });
    const input5 = container.querySelector("#pincode") as HTMLInputElement;
    act(() => {
      expect(input5).toBeInTheDocument();
      fireEvent.change(input5, { target: {name:"pincode", value: "abcd" } });
    });
    const input6 = container.querySelector("#country") as HTMLInputElement;
    expect(input6).toBeInTheDocument();
    fireEvent.mouseDown(input6);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    act(() => {
      const options = screen.getAllByRole("option");
      expect(options[1]).toBeInTheDocument();
      fireEvent.click(options[1]);
    });

    const datePicker = screen.getByLabelText("Date of Birth");

    userEvent.type(datePicker, "2021-11-09");

    const chosenDate = screen.getByRole("button", { name: "Choose date" }); 
    fireEvent.click(chosenDate);
    expect(chosenDate).toBeInTheDocument();
    
    
  });
});
