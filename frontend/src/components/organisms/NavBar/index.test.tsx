import { render } from "@testing-library/react";
import React from "react";
import { SideNavigationBar } from ".";
import { sideNavItems } from "../../../utils/constants";
import "@testing-library/jest-dom/extend-expect";



it("renders the PocketPay logo", () => {
  const { getByAltText } = render(<SideNavigationBar data={sideNavItems} />);
  const logo = getByAltText("pocketpay-logo");
  expect(logo).toBeInTheDocument();
});

it("renders the menu items", () => {
  const { getByText } = render(<SideNavigationBar data={sideNavItems} />);
  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Cards")).toBeInTheDocument();
});
