import React from "react";
import CheckBox from "../../atoms/CheckBox";
import MyText from "../../atoms/Typography";
import { Stack } from "@mui/material";
import Theme from "../../../themes";

interface CheckBoxTextProps {
  checked: boolean;
  variant: any;
  text: string;
  onChange?: any;
}

const CheckBoxText = (props: CheckBoxTextProps) => {
  return (
    <Stack direction="row" alignItems="center">
      <CheckBox {...props} />
      <MyText variant={props.variant} color={Theme.palette.text.high}>
        {props.text}
      </MyText>
    </Stack>
  );
};

export default CheckBoxText;
