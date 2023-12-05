import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ConfirmAddress from ".";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";

describe("ConfirmAddress", () => {
  it("should render ConfirmAddress component", () => {
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

    const Confirm = () => {
      const [tradingAdd, setTradingAdd] = useState([]);

      return (
        <ConfirmAddress
          tradingAddress={tradingAdd}
          setTradingAddress={setTradingAdd}
          confirmClick={fun}
        />
      );
    };
    render(
      <Provider store={store}>
        <Confirm />
      </Provider>
    );

  });
});
