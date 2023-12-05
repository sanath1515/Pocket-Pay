import { Radio, ThemeProvider } from "@mui/material";
import React from "react";
import { Theme } from "../../../themes";

interface CustomRadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onClick?: any;
  label?: string;
  sx?: any;
  disabled?: boolean;
  variant?: string;
  onChange?: any;
  size?: "small" | "medium";
}
export const CustomRadio = (props: CustomRadioProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Radio id="radio" {...props} />
    </ThemeProvider>
  );
};
