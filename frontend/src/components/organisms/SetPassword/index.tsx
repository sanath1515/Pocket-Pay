import { Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import Image from "../../atoms/Image";
import Theme from "../../../themes";

const Eye = "./assets/icons/eye.svg";
const EyeOff = "./assets/icons/eye-off.svg";

interface SetPasswordProps{
  pwdChange?:any;
  password?:any
  pwderror?:any
}

export const SetPassword = (props:SetPasswordProps) => {
  const [hide, setHide] = useState(false);
  const changeIcon = () => {
    setHide(!hide);
  };

  return (
    <ThemeProvider theme={Theme}>
    <Stack sx={{ width: "27.9vw" }} spacing={Theme.spacing(11)}>
      <MyText variant={'h1'} >
        Create your password
      </MyText>
      <InputField
        id={'pwd'}
        type={hide ? "text" : "password"}
        placeholder="Enter your password"
        error={props.pwderror!==""}
        helperText={props.pwderror}
        variant="outlined"
        onChange={props.pwdChange}
        value={props.password}
        endicon={<Image onClick={changeIcon} src={hide ? Eye : EyeOff} />}
      />
    </Stack>
    </ThemeProvider>
  );
};
