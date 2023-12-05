import React from "react";
import { InputField } from "../../atoms/InputField";
import { MenuItem } from "@mui/material";
import Image from "../../atoms/Image";
import { Theme } from "../../../themes";

interface SelectInputProps {
  variant: "standard" | "filled" | "outlined" | undefined;
  label?: string;
  placeholder?: string;
  value?: string;
  helperText?: string;
  starticon?: any;
  endicon?: any;
  select?: boolean;
  children?: React.ReactNode;
  defaultValue?: any;
  sx?: any;
  selectfield?: any;
  renderOption?: any;
  renderValue?: any;
  handleChange?: any;
  hidden?: boolean;
  titlemenu?: boolean;
  menuItem?: any;
  onChange?: any;
  SelectProps?:any
}

export const SelectInput = (props: SelectInputProps) => {
  return (
    <InputField
      value={props.value}
      onChange={props.handleChange}
      SelectProps={{
        renderValue: props.renderValue,
      }}
      {...props}
    >
      {!props.titlemenu &&
        props.selectfield.map((select: any) => {
          return (
            <MenuItem
              style={{
                minHeight: Theme.spacing(1.75),
                gap: Theme.spacing(7.5),
              }}
              key={select.value}
              value={select.value}
            >
              {props.hidden ? null : (
                <Image src={select.img} hidden={props.hidden} />
              )}
              {select.label}
            </MenuItem>
          );
        })}
      {props.titlemenu && props.menuItem}
    </InputField>
  );
};