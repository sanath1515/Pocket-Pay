import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentDetails from ".";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Payment Details", () => {
  const mockStore = configureStore([]);
  const initialState = {
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
    ],
  };
  const store = mockStore(initialState);
  
  test('renders  component', () => {
      render(<Provider store={store} ><PaymentDetails /></Provider>);
    });

      test('buttons render  test', () => {
        render(<Provider store={store} ><PaymentDetails /></Provider>);
        const ele=screen.getAllByRole('button')
        ele.forEach(element => {
            expect(element).toBeInTheDocument()
        });
      });
      test('handleclick function  test', () => {
        render(<Provider store={store} ><PaymentDetails /></Provider>);
        const ele=screen.getAllByRole('button')
        ele.forEach(element => {
            fireEvent.click(element)
        });
      });
      
  });
  