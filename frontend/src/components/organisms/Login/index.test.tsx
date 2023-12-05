import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from ".";
import "@testing-library/jest-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Login component", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users:{
      id:1,
      name:"sk",
      password:"sk"
    }
  }

  const store = mockStore(initialState);
  it("should render the login button", () => {
    render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
    const loginButton = screen.getByRole("button", { name: /Log in/i });
    expect(loginButton).toBeInTheDocument();
  });

  it("should call the onClick function when the login button is clicked", () => {
    const mockOnClick = jest.fn(() => console.log("mockOnClick"));
    render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
    const loginButton = screen.getByRole("button", { name: "Log in" });
    fireEvent.click(loginButton);
  });

  

  it('should render the "trouble logging in?" button', () => {
    render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
    const troubleLoggingInButton = screen.getByRole("button", {
      name: /trouble logging in\?/i,
    });
    expect(troubleLoggingInButton).toBeInTheDocument();
  });

  it('should render the "or, login with" message', () => {
    render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
    const orLoginWithMessage = screen.getByText(/Or, Login with/i);
    expect(orLoginWithMessage).toBeInTheDocument();
    const b1=screen.getByRole("button", {name:"Sign up"});
    fireEvent.click(b1);
  });

  it('should render the hide pwd function', () => {

    const {container}=render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
    const hide=screen.getByTestId('hide-img')
    act(()=>{
      fireEvent.click(hide)
    })

    const email=container.querySelector('#email') as HTMLInputElement
    expect(email).toBeInTheDocument()
    act(()=>{
      fireEvent.change(email,{target:{value:"abhi@gmail.com"}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:"abhicom"}})
    })
    act(()=>{
      fireEvent.change(email,{target:{value:""}})
    })

    const pwd=container.querySelector('#pswd') as HTMLInputElement
    expect(pwd).toBeInTheDocument()
    act(()=>{
      fireEvent.change(pwd,{target:{value:"12345678"}})
    })
    act(()=>{
      fireEvent.change(pwd,{target:{value:"12"}})
    })
    act(()=>{
      fireEvent.change(pwd,{target:{value:""}})
    })
  })


});