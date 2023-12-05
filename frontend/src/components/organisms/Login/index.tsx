import {
  Divider,
  Box,
  Stack,
  ThemeProvider,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import Button from "../../atoms/Button";
import Theme from "../../../themes";
import CheckBox from "../../atoms/CheckBox";
import Image from "../../atoms/Image";
import { useNavigate } from "react-router-dom";
import { TextButton } from "../../molecules/TextButton";
import axios from "axios";
import { mockServer } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { setUser } from "../../../state/reducers";
export interface LoginProps {
  onClick?: any;
}
const Eye = "./assets/icons/eye.svg";
const EyeOff = "./assets/icons/eye-off.svg";
const Google = "./assets/icons/google.svg";
const Facebook = "./assets/icons/fb.svg";
const Apple = "./assets/icons/Apple.svg";

export const Login = (props: LoginProps) => {
  const dispatch = useDispatch();
  const [inCorrect, setInCorrect] = useState(false);
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [pswdFocused, setPswdFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const changeIcon = () => {
    setHide(!hide);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password: string) => {
    return password.length >= 7;
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(email);
    const { value } = event.target;
    setEmail(value);

    if (validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    
    if (validatePassword(value)) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 8 characters long");
    }
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box
        data-testid="login-component"
        sx={{ height: "65vh", width: "27.92vw" }}
      >
        <Stack spacing={"3vh"} height="12.6vh" width="28vw">
          <MyText variant={"h1"} color={Theme.palette.text.high}>
            Welcome back
          </MyText>
          <Stack spacing={"1vh"}>
            <FormControl>
              {!emailFocused && (
                <InputLabel sx={{ paddingX: "0.5vw", paddingY: "2vh" }}>
                  <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                    Enter email address
                  </MyText>
                </InputLabel>
              )}
              <InputField
                id={"email"}
                data-testid="email"
                onChange={(e: any) => {
                  if (e.target.value) {
                    setEmailFocused(true);
                    handleEmailChange(e);
                  } else {
                    setEmailFocused(false);
                  }
                }}
                variant={"outlined"}
                error={emailError}
                helperText={emailError}
              />
            </FormControl>
            <FormControl>
              {!pswdFocused && (
                <InputLabel sx={{ paddingX: "0.5vw", paddingY: "2vh" }}>
                  <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                    Enter password
                  </MyText>
                </InputLabel>
              )}
              <InputField
                id={"pswd"}
                data-testid="hide"
                type={hide ? "text" : "password"}
                variant={"outlined"}
                value={password}
                onChange={(e: any) => {
                  if (e.target.value) {
                    setPswdFocused(true);
                    handlePasswordChange(e);
                  } else {
                    setPswdFocused(false);
                  }
                }}
                endicon={
                  <Image
                    data-testid="hide-img"
                    onClick={changeIcon}
                    src={hide ? Eye : EyeOff}
                  />
                }
              />
              {passwordError && (
                <MyText color="error" variant={"body2"}>
                  {passwordError}
                </MyText>
              )}
            </FormControl>
          </Stack>
          <Stack spacing={Theme.spacing(5)}>
            <Button
              variant="contained"
              name={<MyText variant={"b2"}>Log in</MyText>}
              bgColor={Theme.palette.primary[500]}
              sx={{
                borderRadius: Theme.spacing(14),
                height: "6.14vh",
                textTransform: "none",
                width: "27.9vw",
                "&:hover": {
                  backgroundColor: Theme.palette.primary[300],
                },
              }}
              onClick={async () => {
                console.log("login");
                console.log(email);
                await axios
                  .get(mockServer + "users/user/" + email)
                  .then((response: any) => {
                    if (
                      response.data.email === email &&
                      response.data.password === password
                    ) {
                      console.log("user");
                      dispatch(
                        setUser({
                          id: response.data.id,
                          username: response.data.name,
                          password: response.data.password,
                          email: response.data.email,
                        })
                      );
                      navigate('/home')
                     
                    }
                    else{
                      setInCorrect(true)
                    }
                  })
                  .catch((e:any)=>{
                    setInCorrect(true)
                    console.log("error")
                  })
              }}
            />
           {inCorrect && <Stack alignItems={'center'}>
              <MyText variant={'b3'} color={'red'}>
                Enter Correct Details
              </MyText>
            </Stack>}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center">
                <CheckBox checked={true} />
                <MyText variant={"b3"}>Remember me</MyText>
              </Stack>
              <Stack>
                <Button
                  variant="text"
                  name={<MyText variant={"b2"}>Trouble logging in?</MyText>}
                  color="primary"
                  sx={{ textDecoration: "underline", textTransform: "none" }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={Theme.spacing(5)}>
            <Stack justifyContent="center">
              <MyText
                variant={"c1"}
                color={Theme.palette.text.medium}
                sx={{ textAlign: "center" }}
              >
                Or, Login with
              </MyText>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Image src={Google} />
              <Image src={Facebook} />
              <Image src={Apple} />
            </Stack>
          </Stack>
          <Divider />
          <Stack alignItems={"center"}>
            <TextButton
              textvariant={"c1"}
              color={Theme.palette.text.medium}
              text={"New to PocketPay ?"}
              variant={"text"}
              buttonName={<MyText variant={"c1"}>Sign up</MyText>}
              onClick={() => {
                navigate("/");
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
