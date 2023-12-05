import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render,screen } from "@testing-library/react";
import CustomStepper from '.';

describe("CustomStepper", () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const steplabel=[false,false,false]
  const activeStep = 1;
  const alternativeLabel = true;
  
  it("should show the step labels", () => {
     render(
      <CustomStepper
        labelColor={steplabel}
        steps={steps}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
      />
    );
    steps.forEach((step) => {
      const stepElement = screen.getByText(step);
      expect(stepElement).toBeInTheDocument();
    });
  });
});

