import React, { useEffect, useState } from "react";
import Template from "../../components/templates/Landing";
import CustomStepper from "../../components/atoms/Stepper";
import { Theme } from "../../themes";
import Stack from "@mui/material/Stack";
import Image from "../../components/atoms/Image";
import Button from "../../components/atoms/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountType from "../../components/organisms/AccountType";
import {
  accountType,
  accountTypeInfo,
  accountTypeTitle,
} from "../../utils/constants";
import { SelectCountry } from "../../components/organisms/Country";
import TwoFactorAuth from "../../components/organisms/TwoFactorAuth";
import { SetPassword } from "../../components/organisms/SetPassword";
import { setUser } from "../../state/reducers";

const AccountSetup = () => {
  const [disabled, setDisabled] = useState(true);
  const [steppervalue, setSteppervalue] = useState(1);
  const [account, setAccount] = useState(true);
  const [country, setCountry] = useState(false);
  const [twofact, setTwofact] = useState(false);
  const [phno, setPhno] = useState(false);
  const [otherway, setOtherway] = useState(false);

  const back="./assets/icons/Back.svg"
  const cross="./Assets/icons/cross.svg"
  const users = useSelector((state: any) => state.users);

  const [userData, setUserData] = useState({
    ...users,
  });

  const [pwd, setPwd] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [steplabel, setStepLabel] = useState([true, true, false, false, false]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);

  const Navigate = useNavigate();

  const accountbackButton = () => {
    switch (true) {
      case country: {
        setAccount(true);
        setCountry(false);
        setSteppervalue(1);
        const temp = [...steplabel];
        temp[2] = false;
        setStepLabel(temp);
        setDisabled(true);
        break;
      }
      case twofact: {
        if (phno) {
          setPhno(false);
        } else if (otherway) {
          setOtherway(false);
          setPhno(true);
        } else {
          setCountry(true);
          setTwofact(false);
          setSteppervalue(2);
          const temp = [...steplabel];
          temp[3] = false;
          setStepLabel(temp);
          setDisabled(true);
        }
        break;
      }
      case pwd: {
        setPwd(false);
        setTwofact(true);
        setPhno(false);
        setDisabled(true);
        setPassword("");
        setUserData({
          ...userData,
          password: "",
        });
        setSteppervalue(3);
        const temp = [...steplabel];
        temp[4] = false;
        setStepLabel(temp);

        break;
      }

      default: {
        Navigate(-1);
        break;
      }
    }
  };

  const Close=() => {
    Navigate(-1);
  }
  const continueButtonClick = () => {
    switch (true) {
      case country: {
        console.log("localState", userData);
        console.log("globalState", users);
        setCountry(false);
        setTwofact(true);
        setSteppervalue(3);
        const temp = [...steplabel];
        temp[3] = true;
        setStepLabel(temp);
        setDisabled(!disabled);
        break;
      }
      case twofact: {
        if (!phno) {
          setPhno(true);
          console.log("phno", userData);
          setDisabled(true);
        } else {
          setTwofact(false);
          setSteppervalue(4);
          const temp = [...steplabel];
          temp[4] = true;
          setStepLabel(temp);
          setPwd(true);
          setDisabled(true);
        }
        break;
      }
      case pwd: {
        Navigate("/business");
        break;
      }
    }
  };

  const selectAccount = (option: any) => {
    if (option.title === "Business account") {
      setAccount(false);
      setSteppervalue(2);
      const temp = [...steplabel];
        temp[2] = true;
        setStepLabel(temp);
      setCountry(true);
      setUserData({
        ...userData,
        accountType: option.title,
      });
    }
  };

  const validatePassword = (password: string) => {
    return (password.length < 8);
  };

  const pwdChange = (e: any) => {
    if (!validatePassword(e.target.value)) {
      setPasswordError("");
      setPassword(e.target.value);
      setDisabled(false);
    } else {
      setPasswordError("Password must be at least 8 characters long");
      setPassword(e.target.value);
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setDisabled(true);
    }
  };

  return (
    <Template
      headingsx={{
        paddingTop: "3vh",
        paddingLeft: "5vw",
        paddingRight: "5.1vw",
        height: "15%",
        width: "100%",
      }}
      Heading={
        <Stack direction="row" height={"100%"}>
          <Stack>
            <Image src="./assets/icons/Brand.svg" width={Theme.spacing(30.5)} />
          </Stack>
          <Stack
            width={"89vw"}
            paddingRight={Theme.spacing(18)}
            paddingTop={Theme.spacing(1.6)}
          >
            <CustomStepper
              labelColor={steplabel}
              steps={[
                "Email",
                "Account type",
                "country",
                "2-factor-authentication",
                "Password",
              ]}
              alternativeLabel={true}
              activeStep={steppervalue}
            />
            <Stack
              paddingLeft={"7vw"}
              paddingTop={"5vh"}
            >
              <Image
              
                data-testid="back"
                src={back}
                alt="back img"
                sx={{ cursor: "pointer" }}
                onClick={accountbackButton}
                width={Theme.spacing(4)}
                
              ></Image>
            </Stack>
          </Stack>
          <Stack
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            paddingTop={Theme.spacing(1)}
          >
            <Image
              data-testid={"acc-cross"}
              src={cross}
              alt="close img"
              width={Theme.spacing(3.5)}
              onClick={Close}
            ></Image>
          </Stack>
        </Stack>
      }
      mainsx={{
        paddingX: "35vw",
        paddingTop: "13vh",
        height: "85%",
      }}
      rightxs={12}
      main={
        <Grid container alignItems={"center"} height="100%">
          <Grid item xs={12} sm={6} md={4}>
            <Grid spacing={Theme.spacing(6)} direction="column">
              {account && (
                <Grid item>
                  <AccountType
                    Title={accountTypeTitle}
                    Info={accountTypeInfo}
                    data={accountType}
                    selectAccount={selectAccount}
                  />
                </Grid>
              )}
              {country && (
                <Grid item>
                  <SelectCountry
                    disabled={disabled}
                    setDisabled={setDisabled}
                  />{" "}
                </Grid>
              )}
              {twofact && (
                <Grid item>
                  <TwoFactorAuth
                    disabled={disabled}
                    setDisabled={setDisabled}
                    users={userData}
                    setUsers={setUserData}
                    continue={phno}
                    setContinue={setPhno}
                    country={"./Assets/icons/c2.svg"}
                    otherway={otherway}
                    setOtherway={setOtherway}
                  />
                </Grid>
              )}
              {pwd && (
                <Grid item>
                  <SetPassword
                    pwdChange={pwdChange}
                    password={password}
                    pwderror={passwordError}
                  />
                </Grid>
              )}

              {(country || (twofact && !otherway) || pwd) && (
                <Grid item>
                  <Button
                    disabled={disabled}
                    data-testid={"continue"}
                    variant="contained"
                    name="Continue"
                    sx={{
                      backgroundColor: Theme.palette.primary[500],
                      opacity: disabled ? 0.25 : 1,
                      "&:hover": {
                        backgroundColor: Theme.palette.primary[300],
                      },
                      height: "6.2vh",
                      width: "7.3vw",
                      marginTop: "30%",
                      borderRadius: Theme.spacing(16),
                      textTransform: "none",
                      right: "21vw",
                      bottom: "5vh",
                      position: "absolute",
                    }}
                    onClick={continueButtonClick}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      }
    />
  );
};

export default AccountSetup;
