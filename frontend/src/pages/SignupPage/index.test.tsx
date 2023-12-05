import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SignUpPage from ".";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("SignUpPage", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users: {},
  };
  const store = mockStore(initialState);
 
  test("renders the SignUp component", () => {
    const { getByTestId } = render(<Provider store={store} ><MemoryRouter><SignUpPage/></MemoryRouter></Provider>);
    const loginComponent = getByTestId("signUp-component");
    expect(loginComponent).toBeInTheDocument();
  });
  test("renders the Image component with correct props", () => {
    const { getByTestId } = render(<Provider store={store} ><MemoryRouter><SignUpPage/></MemoryRouter></Provider>);
    const imageComponent = getByTestId("brand-image");
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAttribute("src", "./assets/icons/Brand.svg");
  });
});