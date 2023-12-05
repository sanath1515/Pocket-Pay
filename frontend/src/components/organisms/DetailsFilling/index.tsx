import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import Theme from "../../../themes";
import { InputField } from "../../atoms/InputField";
import MyText from "../../atoms/Typography";
import { CalenderInput } from "../../molecules/CalenderInput";
import Image from "../../atoms/Image";
import dayjs from "dayjs";

export interface DetailsFillingProps {
  userData?: any;
  setUserData?: any;
  setDisabled?: any;
}
const downIcon = () => {
  return <Image src="./Assets/icons/dropdown.svg" />;
};

export const DetailsFilling = (props: DetailsFillingProps) => {
  const Countries = [
    "United Kingdom",
    "Europe",
    "Pakistan",
    "United Kingdom",
    "India",
  ];
  const labels = [
    "First Name",
    "Last Name",
    "Date of birth",
    "Country of residence",
    "Home address",
    "City",
    "Pincode",
  ];
  const name = [
    "firstname",
    "lastname",
    "dob",
    "country",
    "homeaddress",
    "city",
    "pincode",
  ];
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const val = [fname, lname, dob, country, homeAddress, city, pincode];
  const setVal = [
    setFname,
    setLname,
    setDob,
    setCountry,
    setHomeAddress,
    setCity,
    setPincode,
  ];

  const handleDateChange = (newDate: Date | null) => {
    const date = String(newDate);
    setVal[2](date);
    props.setUserData({
      ...props.userData,
      name: val[0] + " " + val[1],
      dob: date,
    });
  };

  const handleChange = (e: any) => {
    if (e.target.name === "firstname") {
      setVal[0](e.target.value);
    } else if (e.target.name === "lastname") {
      setVal[1](e.target.value);
    } else if (e.target.name === "country") {
      setVal[3](e.target.value);
      props.setUserData({
        ...props.userData,
        address: {
          ...props.userData.address,
          country: e.target.value,
        },
      });
    } else if (e.target.name === "homeaddress") {
      setVal[4](e.target.value);
      props.setUserData({
        ...props.userData,
        address: {
          ...props.userData.address,
          houseNo: e.target.value,
        },
      });
    } else if (e.target.name === "city") {
      setVal[5](e.target.value);
      props.setUserData({
        ...props.userData,
        address: {
          ...props.userData.address,
          city: e.target.value,
        },
      });
    } else if (e.target.name === "pincode") {
      if (e.target.value.length <= 8) {
        setVal[6](e.target.value);
        props.setUserData({
          ...props.userData,
          address: {
            ...props.userData.address,
            pincode: e.target.value,
          },
        });
      }
    }
  };

  if (fname && lname && dob && country && homeAddress && city && pincode) {
    props.setDisabled(false);
  } else {
    props.setDisabled(true);
  }

  const today = dayjs();
  const eighteenYearsAgo = today.subtract(18, "year");
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          height: "55vh",
          width: "35vw",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack spacing={8}>
          <Stack spacing={5}>
            <MyText variant="h1" color={Theme.palette.text.high}>
              Fill in your details
            </MyText>
            <MyText
              variant={Theme.typography.b3}
              color={Theme.palette.text.medium}
            >
              {" "}
              Since you’re opening the account, we need to know a bit more about
              you.
            </MyText>
          </Stack>
          <Stack>
            {labels.map((label: any, index: number) => {
              return (
                <FormControl key={label}>
                  {!val[index] && index !== 2 && (
                    <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                      <MyText
                        variant="b2"
                        color={Theme.palette.text.lowemphasis}
                      >
                        {label}
                      </MyText>
                    </InputLabel>
                  )}
                  {index !== 2 && (
                    <InputField
                      id={name[index]}
                      name={name[index]}
                      value={val[index]}
                      variant={"outlined"}
                      onChange={handleChange}
                      label={val[index] ? label : ""}
                      select={index === 3 ? true : false}
                      SelectProps={
                        index === 3
                          ? {
                              IconComponent: downIcon,
                            }
                          : null
                      }
                    >
                      {Countries.map((country) => {
                        return (
                          <MenuItem
                            key={country}
                            value={country}
                            sx={{
                              height: "6vh",
                            }}
                          >
                            {country}
                          </MenuItem>
                        );
                      })}
                    </InputField>
                  )}
                  {index === 2 && (
                    <Stack py={"2vh"}>
                      <CalenderInput
                        onChange={handleDateChange}
                        maxDate={eighteenYearsAgo}
                        sx={{
                          width: "27.9vw",
                        }}
                        label={
                          <MyText
                            variant="b2"
                            sx={{ paddingLeft: Theme.spacing(2.5) }}
                          >
                            Date of Birth
                          </MyText>
                        }
                      />
                    </Stack>
                  )}
                </FormControl>
              );
            })}{" "}
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
