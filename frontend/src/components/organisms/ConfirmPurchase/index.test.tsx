import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmCardPurchase } from "./index";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("ConfirmCardPurchase", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users:{
      id:1,
      name:"sk",
      password:"sk"
    },
    currency: { send: "100", receive: "" },
    recipients : {
      firstname: "John",
      lastname: "Doe",
      accno: "1234567890",
      email: "sk@gmail.com",
      acctype: "checking",
      IFSC: "20000000"
    },
    directors:[
      {
        firstname: "John",
        lastname: "Doe",
        dob : "123456",
        country: "United States",
      }
    ],
    owners:[
      {
        firstname: "John",
        lastname: "Doe",
        dob : "123456",
        country: "United States",
      }
    ]
  };
  const store = mockStore(initialState);

  test("renders the component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ConfirmCardPurchase />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("ConfirmCard")).toBeInTheDocument();
  });

  test("triggers the onClick event when the 'Complete' button is clicked", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ConfirmCardPurchase />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole("button", { name: "Complete" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

  });
});
