import React from "react";
import SendMoney from ".";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Sending Money service", () => {
  const mockStore = configureStore([]);
  const initialState = {
    users:{
      id:12,
      username:'sk',

    },
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
        firstName: "John",
        lastName: "Doe",
        dob: "123456",
        country: "United States",
      },
    ],
    owners: [
      {
        firstName: "John",
        lastName: "Doe",
        dob: "123456",
        country: "United States",
      },
    ],
  };
  const store = mockStore(initialState);
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
  });
  test("renders without errorss", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider> 
    );
     const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    const inputsend=screen.getByTestId("send");
    expect(inputsend).toBeInTheDocument()
    fireEvent.change(inputsend)
    
    initialState.currency={send:"100",receive:'100'}

    const continueButton = screen.getByTestId("continue");
    
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);

    const reciever = screen.getByTestId("recipient");
    expect(reciever).toBeInTheDocument();
    const selectRecipient = screen.getAllByTestId("icon-text-radio");
    selectRecipient.forEach((element) => {
      fireEvent.click(element);
    });
    const sendRecipient = screen.getByTestId("send-to-someone");
    expect(sendRecipient).toBeInTheDocument();
    const continueButton2 = screen.getByTestId("continue");
    expect(continueButton2).toBeInTheDocument();
    fireEvent.click(continueButton2);
    const verify1 = screen.getByTestId("verificationStep");
    expect(verify1).toBeInTheDocument();
    const continueButton3 = screen.getByTestId("continue");
    fireEvent.click(continueButton3);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton4 = screen.getByTestId("continue");
    fireEvent.click(continueButton4);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton5 = screen.getByTestId("continue");
    fireEvent.click(continueButton5);
    expect(screen.getByTestId("review")).toBeInTheDocument();
    const confirmReview = screen.getByTestId("confirm-review");
    fireEvent.click(confirmReview);
    expect(screen.getByTestId("payment-methods")).toBeInTheDocument();
    const debitmethod = screen.getByTestId("debitcard-pay");
    fireEvent.change(debitmethod);
    const continueButton6 = screen.getByTestId("continueToPay");
    fireEvent.click(continueButton6);
    expect(screen.getByTestId("Card")).toBeInTheDocument();
    const continueButton7 = screen.getByTestId("continueToPay");
    fireEvent.click(continueButton7);
    expect(screen.getByTestId("Card")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("back"));
    // expect(screen.getByTestId("Card")).toBeInTheDocument();
    // fireEvent.click(screen.getByTestId("back"));
    // expect(screen.getByTestId("payment-methods")).toBeInTheDocument();
  });
  test("send money renders with back button functionality", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("back"));
    const selectAccount2 = screen.getByTestId("account-type");
    expect(selectAccount2).toBeInTheDocument();
    const selectType2 = screen.getAllByTestId("icon-text-radio");
    selectType2.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion2 = screen.getByTestId("amount");
    expect(amountConvertion2).toBeInTheDocument();
    const continueButton = screen.getByTestId("continue");
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
    fireEvent.click(screen.getByTestId("back"));
    const amountConvertion3 = screen.getByTestId("amount");
    expect(amountConvertion3).toBeInTheDocument();
  });
  test("send money renders with back button fuanctionality", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    const continueButton = screen.getByTestId("continue");
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
    const reciever = screen.getByTestId("recipient");
    expect(reciever).toBeInTheDocument();
    const selectRecipient = screen.getAllByTestId("icon-text-radio");
    selectRecipient.forEach((element) => {
      fireEvent.click(element);
    });
    fireEvent.click(screen.getByTestId("back"));
    const reciever2 = screen.getByTestId("recipient");
    expect(reciever2).toBeInTheDocument();
  });
  test("send money renders with back button funcstionality", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    const continueButton = screen.getByTestId("continue");
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
    const reciever = screen.getByTestId("recipient");
    expect(reciever).toBeInTheDocument();
    const selectRecipient = screen.getAllByTestId("icon-text-radio");
    selectRecipient.forEach((element) => {
      fireEvent.click(element);
    });

    const sendRecipient = screen.getByTestId("send-to-someone");
    expect(sendRecipient).toBeInTheDocument();
    const continueButton2 = screen.getByTestId("continue");
    expect(continueButton2).toBeInTheDocument();
    fireEvent.click(continueButton2);
    fireEvent.click(screen.getByTestId("back"));
    const sendRecipient2 = screen.getByTestId("send-to-someone");
    expect(sendRecipient2).toBeInTheDocument();
  });
  test("send money renders with back button functidonality", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    const continueButton = screen.getByTestId("continue");
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
    const reciever = screen.getByTestId("recipient");
    expect(reciever).toBeInTheDocument();
    const selectRecipient = screen.getAllByTestId("icon-text-radio");
    selectRecipient.forEach((element) => {
      fireEvent.click(element);
    });

    const sendRecipient = screen.getByTestId("send-to-someone");
    expect(sendRecipient).toBeInTheDocument();
    const continueButton2 = screen.getByTestId("continue");
    expect(continueButton2).toBeInTheDocument();
    fireEvent.click(continueButton2);
    const verify1 = screen.getByTestId("verificationStep");
    expect(verify1).toBeInTheDocument();
    const continueButton3 = screen.getByTestId("continue");
    fireEvent.click(continueButton3);
    fireEvent.click(screen.getByTestId("back"));
    const verify2 = screen.getByTestId("verificationStep");
    expect(verify2).toBeInTheDocument();
    const continueButton4 = screen.getByTestId("continue");
    fireEvent.click(continueButton4);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton5 = screen.getByTestId("continue");
    fireEvent.click(continueButton5);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("back"));
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton6 = screen.getByTestId("continue");
    fireEvent.click(continueButton6);
    const continueButton7 = screen.getByTestId("continue");
    fireEvent.click(continueButton7);
    expect(screen.getByTestId("review")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("back"));
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton8 = screen.getByTestId("continue");
    fireEvent.click(continueButton8);
    const confirmReview = screen.getByTestId("confirm-review");
    fireEvent.click(confirmReview);
    expect(screen.getByTestId("payment-methods")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("back"));
    expect(screen.getByTestId("review")).toBeInTheDocument();
  });
  test("renders without errorrs", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const selectAccount = screen.getByTestId("account-type");
    expect(selectAccount).toBeInTheDocument();
    const selectType = screen.getAllByTestId("icon-text-radio");
    selectType.forEach((element) => {
      fireEvent.click(element);
    });
    const amountConvertion = screen.getByTestId("amount");
    expect(amountConvertion).toBeInTheDocument();
    const continueButton = screen.getByTestId("continue");
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
    const reciever = screen.getByTestId("recipient");
    expect(reciever).toBeInTheDocument();
    const selectRecipient = screen.getAllByTestId("icon-text-radio");
    selectRecipient.forEach((element) => {
      fireEvent.click(element);
    });
    const sendRecipient = screen.getByTestId("send-to-someone");
    expect(sendRecipient).toBeInTheDocument();
    const continueButton2 = screen.getByTestId("continue");
    expect(continueButton2).toBeInTheDocument();
    fireEvent.click(continueButton2);
    const verify1 = screen.getByTestId("verificationStep");
    expect(verify1).toBeInTheDocument();
    const continueButton3 = screen.getByTestId("continue");
    fireEvent.click(continueButton3);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton4 = screen.getByTestId("continue");
    fireEvent.click(continueButton4);
    expect(screen.getByTestId("verification-details")).toBeInTheDocument();
    const continueButton5 = screen.getByTestId("continue");
    fireEvent.click(continueButton5);
    expect(screen.getByTestId("review")).toBeInTheDocument();
    const confirmReview = screen.getByTestId("confirm-review");
    fireEvent.click(confirmReview);
    expect(screen.getByTestId("payment-methods")).toBeInTheDocument();
     });
  test("Clicking the back button should navigate to the previous step or page", () => {
   render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const backButton = screen.getByTestId("back");
    fireEvent.click(backButton);
  
  });
  test("Clicking the close button should navigate back", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SendMoney />
        </MemoryRouter>
      </Provider>
    );
    const closeButton = screen.getByAltText("close not found");
    fireEvent.click(closeButton);
  });
});
