import { fireEvent, render, screen } from "@testing-library/react";
import Logout from ".";
import "@testing-library/jest-dom";
import React, { useState } from "react";
import '@testing-library/jest-dom/extend-expect';

describe("Logout component", () => {
  const mockHandleLogout = jest.fn();
  const mockOpenLogout = jest.fn();

  test("renders the component with correct text and icons", () => {
    render(
      <Logout
        name="sk"
        id={"sah"}
        logout={true}
        handleLogout={mockHandleLogout}
        openLogout={mockOpenLogout}
      />
    );

    expect(screen.getByText("sk")).toBeInTheDocument();
    expect(screen.getByText("sah")).toBeInTheDocument();
    expect(screen.getByText("your details")).toBeInTheDocument();
    expect(screen.getByText("settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("calls handleLogout when Logout is clicked", () => {
    render(
      <Logout
        logout={true}
        handleLogout={false}
        openLogout={mockOpenLogout}
      />
    );

  });

  test('renders logout', () => {
    const Fun = () => {
      const [logout, openLogout] = useState(true);

      return (
        <Logout
          logout={logout}
          handleLogout={false}
          openLogout={openLogout}
        />
      );
    };

    render(<Fun />);
    const logoutModal = screen.getByTestId('logout-modal');
    expect(logoutModal).toBeInTheDocument();
    
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();
    
    const modalElement = screen.getByRole('presentation');
    modalElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));

  });

});
