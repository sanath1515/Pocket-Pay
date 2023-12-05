import { fireEvent, render, screen } from "@testing-library/react";
import { LloydsPaymentDetails } from ".";
import "@testing-library/jest-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("LloydsPaymentDetails", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users:{
      id:"30",
      username:'sk',
      password:'1200'
    },
    currency: { send: "100", receive: "" },
    recipients: {
      firstname: "John",
      lastname: "Doe",
      accno: "1234567890",
      email: "sk@gmail.com",
      acctype: "checking",
      IFSC: "20000000"
    },
    directors:[
      {
        firstName: "John",
        lastName: "Doe",
        dob : "123456",
        country: "United States",
      }
    ],
    owners:[
      {
        firstName: "John",
        lastName: "Doe",
        dob : "123456",
        country: "United States",
      }
    ]
  };
  const store = mockStore(initialState);

  test("displays the correct payment details", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LloydsPaymentDetails />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/Go to your Lloyds's online banking/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/our bank details for payments in GBP/i)
    ).toBeInTheDocument();
  });

  test("displays the 'Continue' and 'Cancel this transfer' buttons", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LloydsPaymentDetails />
        </MemoryRouter>
      </Provider>
    );
    const button1=screen.getByRole("button", { name: /continue/i })
    expect(button1).toBeInTheDocument();
    fireEvent.click(button1);

      
      const button2=screen.getByRole("button", { name: /cancel this transfer/i })
    expect(button2).toBeInTheDocument();
    fireEvent.click(button2);
  });
});
