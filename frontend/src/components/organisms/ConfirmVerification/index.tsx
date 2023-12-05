import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import { CalenderInput } from "../../molecules/CalenderInput";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Theme from "../../../themes";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import { countries } from "../../../utils/constants";
import dayjs from "dayjs";

const DropdownIcon = () => (
  <Image src="./Assets/icons/dropdown.svg" alt="dropdown-svg" />
);

interface DirectorVerificationProps {
  Heading?: string;
  Info?: string;
  Id1?: string;
  Id2?: string;
  ButtonName?: string;
  firstName?: string;
  lastName?: string;
  directors?: any;
  setDirectors?: any;
  role?: any;
}
const AddIcon = "./assets/icons/plus.svg";

export const ConfirmVerification = (props: DirectorVerificationProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    const date = newDate ? newDate.toISOString() : "";
    handleDirectorChange(0, "dob", date);
  };
  const [nation, setNation] = useState("");
  const [fnameFocused, setFnameFocused] = useState(false);
  const [lnameFocused, setLnameFocused] = useState(false);
  const [countryFocused, setCountryFocused] = useState(false);
  const [display, setDisplay] = useState(false);
  const today = dayjs();
const eighteenYearsAgo = today.subtract(18, 'year');
const handleCountryChange = (event: any) => {
    setNation(event.target.value);
    setCountryFocused(true);
    handleDirectorChange(0, event.target.name, event.target.value);
  };

  const handleDirectorChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedDirectors = [...props.directors];

    updatedDirectors[index] = {
      ...updatedDirectors[index],
      [field]: value,
      role: props.role,
    };

    props.setDirectors(updatedDirectors);
  };

  const addPerson = () => {
    setDisplay(true);
  };
  return (
    <ThemeProvider theme={Theme}>
      <Stack
        data-testid="verification-details"
        justifyContent="flex-start"
        width="27.9vw"
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        height={"65vh"}
      >
        <Stack spacing={Theme.spacing(4)}>
          <MyText variant={"h1"}>{props.Heading}</MyText>
          <MyText variant={"b3"} color={Theme.palette.text.medium}>
            {props.Info}
          </MyText>
        </Stack>
        <Stack height={Theme.spacing(8)} />
        <MyText variant={"b3"}>{props.Id1}</MyText>
        <Stack height={Theme.spacing(6)} />
        <Stack spacing={"Theme.spacing(7)"}>
          <FormControl>
            {!fnameFocused && (
              <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                  First name
                </MyText>
              </InputLabel>
            )}
            <InputField
              id="fname"
              data-testid="firstname"
              name="firstName"
              variant={"outlined"}
              onChange={(event: any) => {
                if (event.target.value === "") {
                  setFnameFocused(false);
                } else if (event.target.value === "" || event.target.value) {
                  setFnameFocused(true);
                  handleDirectorChange(
                    0,
                    event.target.name,
                    event.target.value
                  );
                }
              }}
              sx={{
                borderBottom: fnameFocused ? "2px solid #7633FF" : "none",
                borderRadius: fnameFocused ? "8px" : "none",
              }}
              label={fnameFocused ? "First name" : ""}
            />
          </FormControl>
          <FormControl>
            {!lnameFocused && (
              <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                  Last name
                </MyText>
              </InputLabel>
            )}
            <InputField
              id={"lname"}
              name="lastName"
              variant={"outlined"}
              onChange={(e: any) => {
                if (e.target.value || e.target.value === "") {
                  setLnameFocused(true);
                  handleDirectorChange(0, e.target.name, e.target.value);
                  if (e.target.value === "") {
                    setLnameFocused(false);
                  }
                }
              }}
              label={lnameFocused ? "Last name" : ""}
              value={props.lastName}
            />
          </FormControl>
          <Stack paddingY={"2vh"}>
            <CalenderInput
              sx={{
                width: "27.9vw",
              }}
              value={selectedDate}
              onChange={handleDateChange}
              maxDate={eighteenYearsAgo}
              label={
                <MyText variant="b2" sx={{ paddingLeft: "0.5vw",paddingY:'2.2vh' }}>
                  Date of Birth
                </MyText>
              }
            />
          </Stack>

          <FormControl>
            {!nation && (
              <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                  Country of residence
                </MyText>
              </InputLabel>
            )}
            <InputField
              id={"country"}
              name="country"
              label={countryFocused ? "Country of residence" : ""}
              variant={"outlined"}
              select={true}
              value={nation}
              SelectProps={{
                IconComponent: DropdownIcon,
              }}
              onChange={handleCountryChange}
            >
              {countries.map((country) => (
                <MenuItem
                  key={country.value}
                  sx={{ height: "7vh" }}
                  value={country.value}
                >
                  <MyText variant={'b2'}>
                  {country.label}

                  </MyText>
                </MenuItem>
              ))}
            </InputField>
          </FormControl>
        </Stack>
        <Stack height={Theme.spacing(4.25)} />
        {!display && (
          <Button
            data-testid="addButton"
            sx={{ width: "12.3rem", textTransform: "none" }}
            variant="text"
            onClick={addPerson}
            name={props.ButtonName}
            startIcon={<Image src={AddIcon} />}
          />
        )}
        {display && (
          <Stack data-testid="another-person">
            <Stack height={Theme.spacing(8)} />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={Theme.spacing(129)}
            >
              <MyText variant={"b3"}>{props.Id2}</MyText>
              <Image
                src="./Assets/icons/cross.svg"
                data-testid="cross"
                onClick={() => {
                  setDisplay(false);
                }}
                sx={{ cursor: "pointer" }}
              />
            </Stack>
            <Stack>
              <FormControl>
                {!fnameFocused && (
                  <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                    <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                      First name
                    </MyText>
                  </InputLabel>
                )}
                <InputField
                  id="fname1"
                  variant={"outlined"}
                  onChange={(event: {
                    target: { value: React.SetStateAction<string> };
                  }) => {
                    if (event.target.value) {
                      setFnameFocused(true);
                    } else {
                      setFnameFocused(false);
                    }
                  }}
                  sx={{
                    borderBottom: fnameFocused ? "2px solid #7633FF" : "none",
                    borderRadius: fnameFocused ? "8px" : "none",
                  }}
                  label={fnameFocused ? "First name" : ""}
                  value={props.firstName}
                />
              </FormControl>
              <FormControl>
                {!lnameFocused && (
                  <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
                    <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                      Last name
                    </MyText>
                  </InputLabel>
                )}
                <InputField
                  id={"lname1"}
                  variant={"outlined"}
                  onChange={(e: { target: { value: any } }) => {
                    if (e.target.value) {
                      setLnameFocused(true);
                    } else {
                      setLnameFocused(false);
                    }
                  }}
                  label={lnameFocused ? "Last name" : ""}
                  value={props.lastName}
                />
              </FormControl>
              <Stack py={'2vh'}>
                <CalenderInput
                  sx={{
                    width: "27.9vw",
                  }}
                  maxDate={eighteenYearsAgo}
                  label={
                    <MyText
                      variant="b2"
                      sx={{ paddingLeft: '0.5vw' }}
                    >
                      Date of Birth
                    </MyText>
                  }
                />
              </Stack>

              <FormControl>
                {!nation && (
                  <InputLabel sx={{ paddingX: '0.5vw', py:'2.2vh' }}>
                    <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                      Country of residence
                    </MyText>
                  </InputLabel>
                )}
                <InputField
                  id="c1"
                  label={countryFocused ? "Country of residence" : ""}
                  variant={"outlined"}
                  select={true}
                  value={nation}
                  onChange={handleCountryChange}
                  SelectProps={{
                    IconComponent: DropdownIcon,
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </InputField>
              </FormControl>
            </Stack>
            <Stack height={Theme.spacing(4.25)} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={Theme.spacing(4.25)}
            >
              <Image src={AddIcon} />
              <MyText variant={"b3"} color={Theme.palette.primary[500]}>
                {props.ButtonName}
              </MyText>
            </Stack>
          </Stack>
        )}
      </Stack>
    </ThemeProvider>
  );
};
