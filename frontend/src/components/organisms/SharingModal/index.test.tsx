import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SharingModal from ".";
import "@testing-library/jest-dom";


describe("SharingModal", () => {
  it("renders the component", () => {
    render(<SharingModal />);
    expect(screen.getByText("Share tracking link")).toBeInTheDocument();
  });

  it("closes the modal when clicked", () => {
    render(<SharingModal />);
    fireEvent.click(screen.getByText("Share tracking link"));
    expect(screen.queryByText("Share tracking link")).not.toBeInTheDocument();
  });

  it("renders the email and link icons", () => {
    render(<SharingModal />);
    expect(screen.getByAltText("email image not found")).toBeInTheDocument();
    expect(screen.getByAltText("link image not found")).toBeInTheDocument();
    expect(screen.getByAltText("background image not found")).toBeInTheDocument();

  });

  it("renders the correct image and text", () => {
    render(<SharingModal />);
    expect(
      screen.getByText("Share the link above, and they can securely track this transfer.")
    ).toBeInTheDocument();
  });
});
