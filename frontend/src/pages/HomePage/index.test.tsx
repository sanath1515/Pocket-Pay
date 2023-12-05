import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { HomePage } from ".";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HomePage", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users: {},
  };
  const store = mockStore(initialState);
  test("renders the page header correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("home-avatar"));
    fireEvent.click(screen.getByTestId("logout-button"));
  });
  test("renders the page main correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: "Send money" }));
  });
  test("renders the home main heading correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
  });
  test("to test with valid url and data shows", async () => {
    const mockTransactions = [
      {
        recipient:{name: "abc"},
        status: "sending",
        recieving_amount: "100",
        sending_amount: "100",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockTransactions });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
  });
});
