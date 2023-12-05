import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import { Theme } from "../../../themes";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import Image from "../../atoms/Image";
import {
  OtherWay,
  twoFactorAuthCaptions,
  twoFactorAuthTitle,
} from "../../../utils/constants";

interface TwoFactorAuthProps {
  country?: string;
  continue?: any;
  setContinue?: any;
  otherway?: any;
  setOtherway?: any;
  users?: any;
  setUsers?: any;
  disabled?: any;
  setDisabled?: any;
}

const TwoFactorAuth = (props: TwoFactorAuthProps) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [code, setCode] = useState("");

  const changePhno = () => {
    props.setOtherway(!props.otherway);
    props.setContinue(false);
  };
  const anotherWay = () => {
    props.setOtherway(!props.otherway);
  };
  const verifyPh = (e: { target: any }) => {
    const inputValue = e.target.value as string;
    const numericValue = inputValue.replace(/\D/g, "");
    if (numericValue.length < 12) {
      props.setDisabled(true);
    } else {
      props.setDisabled(false);
      props.setUsers({
        ...props.users,
        phno: mobileNumber,
      });
    }
    if (numericValue.length <= 12) {
      if (numericValue.charAt(1) === "4") {
        setMobileNumber("+44 " + numericValue.substring(2));
        props.setUsers({
          ...props.users,
          "phno": "+44 " + numericValue.substring(2)
        })
      } else {
        setMobileNumber("+44 " + numericValue);
        props.setUsers({
          ...props.users,
          "phno": "+44 " + numericValue
        })
      }
    }
  };
  const verifyCode = (e: { target: any }) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    if (numericValue.length <= 6) {
      setCode(numericValue);
      props.setDisabled(true)
      if(numericValue.length===6){
        props.setDisabled(false)
      }
    }
  };

  return (
    <>
      {!props.otherway && (
        <Stack hidden={props.continue} width="27.9vw">
          <MyText
            paddingBottom={Theme.spacing(3)}
            variant={"h1"}
            color={Theme.palette.text.high}
          >
            {!props.continue ? twoFactorAuthTitle[0] : twoFactorAuthTitle[1]}
          </MyText>
          <MyText
            paddingBottom={Theme.spacing(11)}
            variant={"b3"}
            color={Theme.palette.text.medium}
          >
            {!props.continue
              ? twoFactorAuthCaptions[0]
              : twoFactorAuthCaptions[1]}
          </MyText>
          <InputField
            id="twoFact"
            variant="outlined"
            type="tel"
            value={!props.continue ? mobileNumber : code}
            onChange={(e: any) => {
              if (!props.continue) {
                verifyPh(e);
              } else {
                verifyCode(e);
              }
            }}
            label={!props.continue ? "Mobile number" : ""}
            starticon={
              !props.continue ? (
                <Stack
                  direction={"row"}
                  gap={Theme.spacing(3.5)}
                  paddingRight={Theme.spacing(4)}
                >
                  <Image src={props.country} alt="country image" />
                  <Image
                    src={"./Assets/icons/dropdown.svg"}
                    alt="dropdown image"
                  />
                  <Divider
                    orientation="vertical"
                    sx={{
                      height: "2.53vh",
                      paddingLeft: Theme.spacing(2.16),
                    }}
                  />
                </Stack>
              ) : undefined
            }
          />
          {props.continue && !props.otherway && (
            <MyText
              variant={"linkText"}
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                paddingTop: Theme.spacing(5),
              }}
              color={Theme.palette.primary[500]}
              onClick={anotherWay}
            >
              {twoFactorAuthCaptions[4]}
            </MyText>
          )}
        </Stack>
      )}
      {props.otherway && (
        <Stack width="27.9vw">
          <MyText
            paddingBottom={Theme.spacing(3)}
            variant={"h1"}
            color={Theme.palette.text.high}
          >
            {twoFactorAuthTitle[2]}
          </MyText>
          <MyText
            paddingBottom={Theme.spacing(9)}
            variant={"b3"}
            color={Theme.palette.text.medium}
          >
            {twoFactorAuthCaptions[2]}
          </MyText>
          <Stack gap={Theme.spacing(4)} height={Theme.spacing(12.5)}>
            {OtherWay.map((way) => {
              return (
                <Stack
                  key={way}
                  direction={"row"}
                  justifyContent={"space-between"}
                  paddingX={Theme.spacing(3.5)}
                  paddingY={Theme.spacing(3.8)}
                  sx={{
                    "&:hover": { backgroundColor: Theme.palette.text.low },
                  }}
                >
                  <MyText variant={"c1"} color={Theme.palette.text.high}>
                    {way}
                  </MyText>
                  <Image
                    src="./Assets/icons/dropright.svg"
                    alt="drop left"
                    width={Theme.spacing(1.615)}
                  />
                </Stack>
              );
            })}
            <MyText
              variant={"linkText"}
              color={Theme.palette.primary[500]}
              sx={{
                paddingTop: Theme.spacing(1),
                cursor: "pointer",
              }}
              onClick={changePhno}
            >
              {twoFactorAuthCaptions[3]}
            </MyText>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default TwoFactorAuth;
