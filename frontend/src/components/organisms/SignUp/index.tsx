import { Divider, Box, Stack, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import Button from "../../atoms/Button";
import Theme from "../../../themes";
import Image from "../../atoms/Image";
import {
  AlreadyAccount,
  LoginWith,
  SignUpHeading,
} from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../state/reducers";

export interface SignUpProps {
  onClick?: any;
}

export const SignUp = (props: SignUpProps) => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    accountType: "",
    phno: "",
    password: "",
    dob: "",
    address:{}
  });

  const Navigate = useNavigate();
  const [disabled,setDisabled]=useState(true)
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(email);
    console.log(emailFocused);
    const { value } = event.target;
    setEmail(value);
    setUserData({
      ...userData,
      "email": event.target.value

    })
    if (validateEmail(value)) {
      setEmailError("");
      setDisabled(false);
    } else {
      setEmailError("Please enter a valid email address");
    }
  };
  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{ height: "73.8vh", width: "27.9vw" }}
        data-testid="signUp-component"
      >
        <Stack spacing={'4vh'}>
          <MyText variant={"h1"} color={Theme.palette.text.high}>
            {SignUpHeading}
          </MyText>
          <InputField
            id={'email'}
            placeholder="Enter your email address"
            onChange={(e: any) => {
              if (e.target.value) {
                setEmailFocused(true);
                handleEmailChange(e);
              } else {
                setEmailFocused(false);
              }
            }}
            error={emailError}
            helperText={emailError}
            variant={"outlined"}
          />
          <Button
            disabled={disabled}
            data-testid="Signup"
            variant="contained"
            name={<MyText variant={'b2'}>Sign up</MyText>}
            bgColor={Theme.palette.primary.main}
            sx={{
              borderRadius: Theme.spacing(14),
              height: "5.9vh",
              textTransform: "none",
              fontSize: "b2",
              '&:hover':{
                backgroundColor:Theme.palette.primary[300]
              }
            }}
            onClick={() => {
              Navigate("/account-setup");
            }}
          />
          <Stack
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <MyText
              variant={"c1"}
              color={Theme.palette.text.medium}
              sx={{ textAlign: "center" }}
            >
              {LoginWith}
            </MyText>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Image src="./assets/icons/google.svg" />
            <Image src="./assets/icons/fb.svg" />
            <Image src="./assets/icons/Apple.svg" />
          </Stack>
          <Stack alignItems={"center"}>
            <MyText variant={"c1"} color={Theme.palette.text.medium}>
              By registering, you accept our
              <Button
                variant="text"
                name={<MyText variant={'c1'}>Terms of use</MyText>}
                color="primary"
                sx={{ textDecoration: "underline", textTransform: "none" , cursor: 'unset'}}
              />
              and
              <Button
                variant="text"
                name={<MyText variant={'c1'}>Privacy Policy</MyText>}
                color="primary"
                sx={{ textDecoration: "underline", textTransform: "none" ,cursor: 'unset'}}
              />
            </MyText>
          </Stack>
          <Divider />

          <Stack alignItems={"center"} justifyContent={'center'} spacing={'0.5vw'} direction={'row'}>
            <MyText variant={"c1"} color={Theme.palette.text.medium}>
              {AlreadyAccount}
              
            </MyText>
            <MyText
                variant={'c1'}
                color={Theme.palette.primary[500]}
                sx={{ textDecoration: "underline", textTransform: "none",cursor:'pointer' }}
                onClick={()=>{
                  Navigate("/login")
                }}
              >
                Log in
              </MyText>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};