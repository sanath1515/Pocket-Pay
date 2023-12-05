import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Business from ".";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Business page", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users:{
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

    },
    trading:[],
    business:{
        businessName: "abc",
        registrationNo: "123",
        registrationAddress: "aaa",
        category: "bc",
        subCategory: "dc",
        size: "12",
    },

  };
  const store = mockStore(initialState);

  test("renders the page correctly",()=>{
    const {container} =render(
        <Provider store={store}>
            <MemoryRouter>
                <Business/>
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByTestId("search")).toBeInTheDocument()   
    fireEvent.click(screen.getByTestId("search"))
    const items=screen.getAllByTestId("menu-item")
    items.forEach(item=>{
        fireEvent.click(item)
    })
    expect(screen.getByText("Confirm your business details")).toBeInTheDocument()
    const but1=screen.getByRole("button",{name:"Confirm"})
    expect(but1).toBeInTheDocument()
    fireEvent.click(but1)

    expect(screen.getByText("Confirm trading address")).toBeInTheDocument()
    const but2=screen.getByRole("button",{name:"Confirm"})
    expect(but2).toBeInTheDocument()
    fireEvent.click(but2)

    expect(screen.getByText("Help us verify your account faster")).toBeInTheDocument()
    
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

    const but3=screen.getByRole("button",{name:"Continue"})
    expect(but3).toBeInTheDocument()
    fireEvent.click(but3)

    expect(screen.getByText("Fill in your details")).toBeInTheDocument()

     
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
    
    const datePicker = screen.getByLabelText("Date of Birth");

    userEvent.type(datePicker, "2021-11-09");

    const chosenDate = screen.getByRole("button", { name: "Choose date" }); 
    fireEvent.click(chosenDate);
    expect(chosenDate).toBeInTheDocument();
    
    const input6 = container.querySelector("#country") as HTMLInputElement;
    expect(input6).toBeInTheDocument();
    fireEvent.mouseDown(input6);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    act(() => {
      const options = screen.getAllByRole("option");
      expect(options[1]).toBeInTheDocument();
      fireEvent.click(options[1]);
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
    
    const but4=screen.getByRole("button",{name:"Continue"})
    expect(but3).toBeInTheDocument()
    fireEvent.click(but4)

    const b1=screen.getByTestId("back")
    fireEvent.click(b1)

    const b2=screen.getByTestId("back")
    fireEvent.click(b2)

    expect(screen.getByText("Confirm trading address")).toBeInTheDocument()
    const b3=screen.getByTestId("back")
    fireEvent.click(b3)

    const b4=screen.getByTestId("back")
    fireEvent.click(b4)

    const c1=screen.getByTestId("cross")
    fireEvent.click(c1)
  })

});