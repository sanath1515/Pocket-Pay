import React, { useState } from "react";
import { InputField } from "../../atoms/InputField";
import { FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import Image from "../../atoms/Image";

interface SelectCountryProps {
  disabled?: any;
  setDisabled?: any;
}
const countries = [
  {
    value: "Andorra",
    label: "Andorra",
    img: "./Assets/icons/c1.svg",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
    img: "./Assets/icons/c2.svg",
  },
  {
    value: "Austria",
    label: "Austria",
    img: "./Assets/icons/c3.svg",
  },
  {
    value: "India",
    label: "India",
    img: "./Assets/icons/c4.svg",
  },
];

const DropdownIcon = () => (
  <Image src="./Assets/icons/dropdown.svg" alt="dropdown-svg" />
);
export const SelectCountry = (props: SelectCountryProps) => {
  const [nation, setNation] = useState("");
  const handleCountryChange = (event: any) => {
    setNation(event.target.value);
    props.setDisabled(false);
  };
  return (
    <Stack sx={{ width: Theme.spacing(129) }} spacing={Theme.spacing(11)}>
      <MyText variant={"h1"}>Your country of registration</MyText>
      <FormControl>
        {!nation && (
          <InputLabel
          sx={{ paddingX: '0.5vw', py:'2.2vh'}}
          >
            <MyText
              variant="b2"
              color={Theme.palette.text.lowemphasis}
            >
              Select your country
            </MyText>
          </InputLabel>
        )}
        <InputField
          id={"country"}
          label={nation ? "country of registration" : ""}
          variant="outlined"
          select
          SelectProps={{
            IconComponent: DropdownIcon,
          }}
          value={nation}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              <Stack
                height={'5vh'}
                direction={"row"}
                spacing={Theme.spacing(2)}
                alignItems={"center"}
              >
                <Image
                  src={country.img}
                  sx={{ width: Theme.spacing(6), height: Theme.spacing(6) }}
                />
                <MyText variant={"b2"}>{country.label}</MyText>
              </Stack>
            </MenuItem>
          ))}
        </InputField>
      </FormControl>
    </Stack>
  );
};
