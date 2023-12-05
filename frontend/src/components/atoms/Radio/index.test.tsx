import { render } from "@testing-library/react";
import { CustomRadio } from ".";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

describe("CustomRadio component", () => {
  test("renders without crashing", () => {
    render(<CustomRadio size={"small"} />);
  });
});
