import React, { useState } from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TwoFactorAuth from ".";
import { act } from "react-dom/test-utils";

describe("Two fact authentication renders correctly", () => {
  test("renders the correct components", () => {
    render(<TwoFactorAuth />);
  });

  test("renders the entering code component", () => {
    const Auth = () => {
      const [otherway, setOtherway] = useState(false);
      const [cont, setCont] = useState(true);

      return (
        <TwoFactorAuth
          continue={cont}
          setContinue={setCont}
          otherway={otherway}
          setOtherway={setOtherway}
        />
      );
    };
    render(<Auth />);
    const text = screen.getByText("Enter the 6-digit code");
    expect(text).toBeInTheDocument();

    const textclick = screen.getByText("I didn’t recieve a code");
    act(() => {
      fireEvent.click(textclick);
    });
    const textclick2 = screen.getByText("Use a different phone number");
    fireEvent.click(textclick2);
  });

  test("renders phno validation", () => {
    const Auth = () => {
      const [cont, setCont] = useState(false);
      const [disabled, setDisabled] = useState(true);
      const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        accountType: "",
        country: "",
        phno: "",
        password: "",
        dob: "",
        address: "",
        pincode: "",
        city: "",
      });
      const [otherway, setOtherway] = useState(false);

      return (
        <TwoFactorAuth
          continue={cont}
          setContinue={setCont}
          disabled={disabled}
          setDisabled={setDisabled}
          users={userData}
          setUsers={setUserData}
          otherway={otherway}
          setOtherway={setOtherway}
        />
      );
    };

    const { container } = render(<Auth />);
    let val = container.querySelector("#twoFact") as HTMLInputElement;
    expect(val).toBeInTheDocument();

    act(() => {
      fireEvent.change(val, { target: { value: "123" } });
      expect(val.value).toBe("+44 123");
    });
    act(() => {
      fireEvent.change(val, { target: { value: "" } });
      expect(val.value).toBe("+44 ");
    });
    act(() => {
      fireEvent.change(val, {
        target: { value: "01abcaaaaaaaaaaaaa23456789" },
      });
      expect(val.value).toBe("+44 0123456789");
    });
    act(() => {
      fireEvent.change(val, { target: { value: "011111123456789" } });
    });
    act(() => {
      fireEvent.change(val, { target: { value: "44123456" } });
    });
  });

  test("renders code validation", () => {
    const Auth = () => {
      const [cont, setCont] = useState(true);
      const [disabled, setDisabled] = useState(true);
      const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        accountType: "",
        country: "",
        phno: "",
        password: "",
        dob: "",
        address: "",
        pincode: "",
        city: "",
      });
      const [otherway, setOtherway] = useState(false);

      return (
        <TwoFactorAuth
          continue={cont}
          setContinue={setCont}
          disabled={disabled}
          setDisabled={setDisabled}
          users={userData}
          setUsers={setUserData}
          otherway={otherway}
          setOtherway={setOtherway}
        />
      );
    };

    const { container } = render(<Auth />);
    let val = container.querySelector("#twoFact") as HTMLInputElement;
    expect(val).toBeInTheDocument();

    act(() => {
      fireEvent.change(val, { target: { value: "123" } });
      expect(val.value).toBe("123");
    });
    act(() => {
      fireEvent.change(val, { target: { value: "" } });
      expect(val.value).toBe("");
    });
    act(() => {
      fireEvent.change(val, { target: { value: "01234567890" } });
      expect(val.value).toBe("");
    });
    act(() => {
      fireEvent.change(val, { target: { value: "012345" } });
      expect(val.value).toBe("012345");
    });

    const text1=screen.getByText("I didn’t recieve a code")
    fireEvent.click(text1)
    fireEvent.click(screen.getByText("Use a different phone number"))
  });
});
