import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import { InputField } from "../../atoms/InputField";
import { Stack, Box, MenuItem, FormControl, InputLabel } from "@mui/material";
import {
  VerificationOptions,
  verificationHeading,
  verificationInfo,
} from "../../../utils/constants";
import Image from "../../atoms/Image";
interface VerificationProps {
  purpose?: any;
  setPurpose?: any;
}

const DropdownIcon = () => (
  <Image src="./Assets/icons/dropdown.svg" alt="dropdown-svg" />
);

export const Verification = (props: VerificationProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    props.setPurpose(event.target.value);
  };

  return (
    <Box data-testid="verificationStep" height={"10vh"} width={"28.2vw"}>
      <Stack spacing={3}>
        <MyText variant={"h1"} color={Theme.palette.text.high}>
          {verificationHeading}
        </MyText>
        <MyText variant={"b3"} color={Theme.palette.text.medium}>
          {verificationInfo}
        </MyText>
        <FormControl>
          {!selectedOption && (
            <InputLabel sx={{
              paddingX:'0.5vw',
              py: '2.2vh'
            }}>
              <MyText variant={"b2"} color={Theme.palette.text.lowemphasis}>
                Tell us what you're using PocketPay for
              </MyText>
            </InputLabel>
          )}
          <InputField
            id="verification-input"
            variant="outlined"
            value={selectedOption}
            onChange={handleOptionChange}
            select
            SelectProps={{
              IconComponent: DropdownIcon,
            }}
          >
            {VerificationOptions.map((option) => (
              <MenuItem
                style={{ height: "6vh", width: "27.841vw" }}
                key={option.value}
                value={option.value}
              >
                <MyText variant={'b2'}>
                {option.label}
                </MyText>
              </MenuItem>
            ))}
          </InputField>
        </FormControl>
      </Stack>
    </Box>
  );
};