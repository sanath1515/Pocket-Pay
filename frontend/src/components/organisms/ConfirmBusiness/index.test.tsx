import { fireEvent, render, screen } from "@testing-library/react";
import ConfirmBusiness from ".";
import "@testing-library/jest-dom";
import React, { useState } from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("ConfirmBusiness component", () => {
  it("should render business details correctly", () => {
    const fun = jest.fn();
    const mockStore = configureStore([]);
    const initialState = {
      business: {
        businessName: "abc",
        registrationNo: "123",
        registrationAddress: "aaa",
        category: "bc",
        subCategory: "dc",
        size: "12",
      },
    };
    const store = mockStore(initialState);

    const Business = () => {
      const [businessDetails, setBusinessDetails] = useState({
        businessName: "",
        registrationNo: "",
        registrationAddress: "",
        category: "",
        subCategory: "",
        size: "",
      });
      
      return (
        <ConfirmBusiness
          handleConfirm={fun}
          businessDetails={businessDetails}
          setBusinessDetails={setBusinessDetails}
        />
      );
    };
    const {container} = render(<Provider store={store}><Business /></Provider>);

    const editText = screen.getByText("Edit");
    expect(editText).toBeInTheDocument();
    fireEvent.click(editText);

    const name=container.querySelector("#name") as HTMLInputElement
    fireEvent.change(name,{target:{name:'name',value:'name'}});

    const no=container.querySelector("#no") as HTMLInputElement
    fireEvent.change(no,{target:{name:'no',value:'no'}});

    const add=container.querySelector("#add") as HTMLInputElement
    fireEvent.change(add,{target:{name:'add',value:'add'}});

    const but1=screen.getByRole("button",{name:"Save"})
    expect(but1).toBeInTheDocument()
    fireEvent.click(but1)
  });
});
