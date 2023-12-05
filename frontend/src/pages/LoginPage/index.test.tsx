import React from "react";
import { render } from "@testing-library/react";
import Loginpage from ".";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("LoginPage", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users: {},
  };
  const store = mockStore(initialState);
  
  test("renders the Login component", () => {
    const { getByTestId } = render(<Provider store={store} ><MemoryRouter><Loginpage /></MemoryRouter></Provider>);
    const loginComponent = getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();
  });
  test("renders the Image component with correct props", () => {
    const { getByTestId } = render(<Provider store={store} ><MemoryRouter><Loginpage /></MemoryRouter></Provider>);
    const imageComponent = getByTestId("brand-image");
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAttribute("src", "./assets/icons/Brand.svg");
  });
});
