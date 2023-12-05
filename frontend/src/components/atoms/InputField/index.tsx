import { InputAdornment, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import { Theme } from "../../../themes";

interface InputFieldProps {
  variant?: "standard" | "filled" | "outlined";
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  helperText?: string;
  starticon?: any;
  endicon?: any;
  select?: boolean;
  children?: React.ReactNode;
  defaultValue?: any;
  sx?: any;
  SelectProps?: any;
  type?: string;
  height?: any;
  multiline?: boolean;
  rows?: any;
  rowsMax?: any;
  id?: any;
  maxLength?: number;
  disabled?: boolean;
  width?: any;
  inputMode?: any;
  pattern?:any
  error?: any
  name?: string;
}

export const InputField = (props: InputFieldProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <TextField
        SelectProps={props.SelectProps}
        InputLabelProps={{
          style:{
            paddingLeft:'0.35vw'
          }
        }}
        InputProps={{
          id: props.id,
          startAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="start">
              {props.starticon}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="end">
              {props.endicon}
            </InputAdornment>
          ),
          sx: props.maxLength
          ? { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }
          : {},
          style:{
            width: !props.width ? "27.85vw" : props.width,
          borderRadius: Theme.spacing(2),
          height:'7vh',
          fontSize:'2vh'
          }
        }}
        margin="normal"
        sx={{
          width: !props.width ? "27.85vw" : props.width,
          height:'7vh',
          borderRadius: Theme.spacing(2),
        }}
        autoComplete="off"
        {...props}
      >
        {props.children}
      </TextField>
    </ThemeProvider>
  );
};
