import React, { useState } from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewDetails from ".";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

describe("recipient details", () => {
  const mockStore = configureStore([]);
  const initialState = {
    currency: { send: "100", receive: "100" },
    recipients: {
      firstname: "John",
      lastname: "Doe",
      accno: "1234567890",
      email: "sk@gmail.com",
      acctype: "checking",
      IFSC: "20000000",
    },
    directors: [
      {
        firstname: "John",
        lastname: "Doe",
        dob: "123456",
        country: "United States",
      },
    ],
    owners: [
      {
        firstname: "John",
        lastname: "Doe",
        dob: "123456",
        country: "United States",
      },
    ],
  };
  const store = mockStore(initialState);

  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
  });
  test("button renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
  test("text renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const text = screen.getAllByText("Edit");
    text.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  test("edit click renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const text = screen.getAllByText("Edit");
    text.forEach((item) => {
      fireEvent.click(item);
    });
  });
  test("change click renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const text = screen.getAllByText("Changes");
    text.forEach((item) => {
      fireEvent.click(item);
    });
  });

  test("edit-transfer renders correctly", () => {
    const Currency = () => {
      const [cur, setCur] = useState({ send: "", recieve: "" });

      return (
        <Provider store={store}>
          <ReviewDetails currency={cur} setCurrency={setCur} />
        </Provider>
      );
    }

    render(
      <Currency />
    );

    const text = screen.getByTestId("edit-transfer");
    fireEvent.click(text);
    const input = screen.getByTestId("Amount-input");
    expect(input).toBeInTheDocument();
    act(()=>{
      fireEvent.change(input,{target:{name:'send'}});

    })
  });

  test("edit-transfer save button renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const text = screen.getByTestId("edit-transfer");
    fireEvent.click(text);
    const button=screen.getByRole("button",{name:"Save"});
    expect(button).toBeInTheDocument()
    fireEvent.click(button);
  });

  test("edit-recipient renders correctly", () => {
    const Reciever = () => {
      const [recipientData, setRecipientData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accno: "",
    IFSC: "",
    acctype: "",
  });
  
      return (
        <Provider store={store}>
          <ReviewDetails recipientData={recipientData} setRecipientData={setRecipientData}/>
        </Provider>
      );
    };
    render(<Reciever/>)
    const text = screen.getByTestId("recipient-edit");
    fireEvent.click(text);
    const input=screen.getAllByTestId("edit-recipient");
    input.forEach((item)=>{
        expect(item).toBeInTheDocument()
        act(()=>{
    fireEvent.change(item);

        })

    })

  });
  test("edit-recipient save button renders correctly", () => {
    render(
      <Provider store={store}>
        <ReviewDetails />
      </Provider>
    );
    const text = screen.getByTestId("recipient-edit");
    fireEvent.click(text);
    expect(screen.getByTestId("review-stack")).toBeInTheDocument()
    const button=screen.getByRole("button",{name:"Save"});
    expect(button).toBeInTheDocument()
    fireEvent.click(button);

    })

});
