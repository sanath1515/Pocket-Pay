import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccountSetup from ".";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

describe("HomePage", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users: {},
  };
  const store = mockStore(initialState);

  test("renders the page header correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AccountSetup />
        </MemoryRouter>
      </Provider>
    );

    const accountType = screen.getAllByTestId("icon-text-radio");
    accountType.forEach((account) => {
      expect(account).toBeInTheDocument();
    });
    accountType.forEach((account) => {
      fireEvent.click(account);
    });

    const countryinput = container.querySelector(
      "#country"
    ) as HTMLSelectElement;
    expect(countryinput).toBeInTheDocument();
    fireEvent.mouseDown(countryinput);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    act(() => {
      const options = screen.getAllByRole("option");
      expect(options[1]).toBeInTheDocument();
      fireEvent.click(options[1]);
    });

    const contryContinueButton = screen.getByTestId("continue");
    expect(contryContinueButton).toBeInTheDocument();
    fireEvent.click(contryContinueButton);

    let val = container.querySelector("#twoFact") as HTMLInputElement;
    expect(val).toBeInTheDocument();

    act(() => {
      fireEvent.change(val, { target: { value: "011111123456789" } });
    });
    const b1 = screen.getByTestId("continue");
    expect(b1).toBeInTheDocument();
    fireEvent.click(b1);
    expect(screen.getByText("Enter the 6-digit code")).toBeInTheDocument();

    let val1 = container.querySelector("#twoFact") as HTMLInputElement;
    expect(val1).toBeInTheDocument();

    act(() => {
      fireEvent.change(val1, { target: { value: "123456" } });
    });
    const b2 = screen.getByTestId("continue");
    expect(b2).toBeInTheDocument();
    fireEvent.click(b2);

    expect(screen.getByText("Create your password")).toBeInTheDocument();
    const pwd = container.querySelector("#pwd") as HTMLInputElement;
    expect(pwd).toBeInTheDocument();

    act(() => {
      fireEvent.change(pwd, { target: { value: "12663" } });
    });
    act(() => {
        fireEvent.change(pwd, { target: { value: "12663456899" } });
      });
    const b3 = screen.getByTestId("continue");
    expect(b3).toBeInTheDocument();
    fireEvent.click(b3);

    expect(screen.getByText("Create your password")).toBeInTheDocument();
    const b4=screen.getByTestId("back")
    fireEvent.click(b4)

    expect(screen.getByText("Verify your phone number with a code")).toBeInTheDocument();

    let val2 = container.querySelector("#twoFact") as HTMLInputElement;
    expect(val2).toBeInTheDocument();

    act(() => {
      fireEvent.change(val2, { target: { value: "011111123456789" } });
    });
    const b5 = screen.getByTestId("continue");
    expect(b5).toBeInTheDocument();
    fireEvent.click(b5);
    
    expect(screen.getByText("I didn’t recieve a code")).toBeInTheDocument();

    const text1=screen.getByText("I didn’t recieve a code")
    fireEvent.click(text1);

    expect(screen.getByText("Use a different phone number")).toBeInTheDocument();
    
    const b6=screen.getByTestId("back");
    fireEvent.click(b6);

    expect(screen.getByText("Use a different phone number")).toBeInTheDocument();
    const b7=screen.getByTestId("back");
    fireEvent.click(b7);

    expect(screen.getByText("I didn’t recieve a code")).toBeInTheDocument();
    const b8=screen.getByTestId("back");
    fireEvent.click(b8);

    expect(screen.getByText("Verify your phone number with a code")).toBeInTheDocument();
    const b9=screen.getByTestId("back");
    fireEvent.click(b9);
    
    expect(screen.getByText("Your country of registration")).toBeInTheDocument();
    const b10=screen.getByTestId("back");
    fireEvent.click(b10);

    expect(screen.getByText("What kind of account would you like to open today?")).toBeInTheDocument();
    const b11=screen.getByTestId("back");
    fireEvent.click(b11);

    fireEvent.click(screen.getByTestId("acc-cross"))

  });
});
