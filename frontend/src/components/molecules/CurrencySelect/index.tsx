import { Box, Stack, MenuItem } from "@mui/material";
import React from "react";
import MyText from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import { Theme } from "../../../themes";
import Image from "../../atoms/Image";

interface CountrySelectProps {
  label?: string;
  name?: string;
  countries?: any;
  value?: any;
  handleIconClick?: any;
  handleClick?: any;
  hidden?: any;
  placeholder?: string;
  onChange?: any;
  val?: any;
  disabled?: boolean;
  datatestid?: any
}

const CurrencySelect = (props: CountrySelectProps) => {
  return (
    <>
      {!props.hidden && <Box>
        <InputField
          id={props.datatestid}
          data-testid={props.datatestid}
          name={props.name}
          value={props.val}
          disabled={props.disabled}
          onChange={props.onChange}
          placeholder={props.placeholder}
          sx={{
            width: "27.5vw",
          }}
          variant="outlined"
          endicon={
            <Stack
              data-testid={"icon"+props.datatestid}
              direction={"row"}
              onClick={props.handleIconClick}
              gap={Theme.spacing(3)}
            >
              <Image
                src={
                  props.value
                    ? "./Assets/icons/c2.svg"
                    : "./Assets/icons/c3.svg"
                }
              />
              <MyText
                variant={Theme.typography.b1}
                color={Theme.palette.text.high}
              >
                {props.value ? "GBP" : "EUR"}
              </MyText>
              <Image src="./Assets/icons/dropdown.svg" />
            </Stack>
          }
        ></InputField>
      </Box>
}      {props.hidden && <Box
        data-testid={"listbox"}
        sx={{
          maxHeight: Theme.spacing(80),
        }}
        width="27.9vw"
        gap={Theme.spacing(2)}
        border="1px solid"
        borderColor={Theme.palette.grey[100]}
        bgcolor={Theme.palette.structuralColors.white}
      >
        <Stack padding={Theme.spacing(5)}>
          <MyText
            variant={Theme.typography.b2}
            color={Theme.palette.text.medium}
          >
            Select currency
          </MyText>
        </Stack>
        <Box display={"flex"}>
          <Box>
            {props.countries.map((country: any) => {
              return (
                <MenuItem
                  style={{
                    minHeight: '6vh',
                    gap: '2vw',
                    width: '26.7vw',
                  }}
                  key={country.value}
                  data-testid="menu-item"
                  value={country.value}
                  id={country.code}
                  onClick={country.code === "GBP" ? props.handleClick : null}
                >
                  <Image src={country.img} />
                  <Stack>
                    <MyText
                      variant={Theme.typography.b2}
                      color={Theme.palette.text.high}
                    >
                      {country.label}
                    </MyText>
                  </Stack>
                  <Stack position={"absolute"} right={'1.5vw'}>
                    <MyText
                      variant={Theme.typography.b2}
                      color={Theme.palette.text.medium}
                    >
                      {country.code}
                    </MyText>
                  </Stack>
                </MenuItem>
              );
            })}
          </Box>
          <Stack
            height="auto"
            width="auto"
            bgcolor={Theme.palette.grey[100]}
            paddingTop={'1vh'}
            >
            <Image src="./Assets/icons/scrolldown.svg" height="2.3%" />
            <Box
              width={'0.9vw'}
              minHeight={'3vh'}
              marginBottom={'18vh'}
              marginX={'0.15vw'}
              marginTop={'1vh'}
              bgcolor={Theme.palette.otherColors.icon2}
            ></Box>
            <Image src="./Assets/icons/scrollup.svg" height="2.3%" />
          </Stack>
        </Box>
      </Box>}
    </>
  );
};
export default CurrencySelect;
