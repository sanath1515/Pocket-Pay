import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import { Theme } from "../../../themes";
import Box from "@mui/material/Box";
import { InputField } from "../../atoms/InputField";
import { searchContent, searchHeading } from "../../../utils/constants";
import Image from "../../atoms/Image";
import { MenuItem } from "@mui/material";

interface BusinessSearchProps {
  handleSelectBusiness?: any;
  hidden?: any;
}

const BusinessSearch = (props: BusinessSearchProps) => {
  const [hidden, setHidden] = useState(false);
  const [value, setValue] = useState("");
  const addressess = [
    { label: "Zemoso technologies pvt ltd" },
    { label: "Zentech solutions pvt ltd" },
    { label: "ZedX Infotech pvt ltd" },
    { label: "Zeswe Solutions pvt ltd" },
  ];
  const handleClick = (event: any) => {
    setValue(event.target.value);
    const temp = event.target.value as string;
    if (temp.length >= 2 && /ze/i.test(temp)) {
      setHidden(!hidden);
    }
  };
  return (
    <>
      <Stack
        width={"27.5vw"}
        height={"60vh"}
        spacing={"44px"}
      >
        <Stack direction="column" spacing={'2vh'}>
          <MyText variant={"h1"}>{searchHeading}</MyText>
          <MyText color={Theme.palette.text.medium} variant={"c1"}>
            {searchContent}
          </MyText>
        </Stack>
        {!hidden && (
          <Box>
            <InputField
              id={"searchfield"}
              value={value}
              onChange={handleClick}
              placeholder={"Search your business"}
              sx={{
                width: "27.5vw",
              }}
              variant="outlined"
              endicon={
                <Image
                  data-testid="search"
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                  src="./Assets/icons/search.svg"
                />
              }
            ></InputField>
          </Box>
        )}
        {hidden && (
          <Box
            data-testid={"listbox"}
            width="27.9vw"
            border="1px solid"
            borderColor={Theme.palette.grey[100]}
            bgcolor={"Theme.palette.structuralColors.white"}
          >
            <Stack padding={'2vh'}>
              <MyText
                data-testid="searchvalue"
                onClick={() => {
                  setHidden(!hidden);
                }}
                variant={Theme.typography.b2}
                color={Theme.palette.text.medium}
              >
                {value}
              </MyText>
            </Stack>
            <Box display={"flex"}>
              <Box>
                {addressess.map((address: any) => {
                  return (
                    <MenuItem
                      style={{
                        minHeight: "6vh",
                        gap: "2vw",
                        width: "26.7vw",
                      }}
                      key={address.label}
                      data-testid="menu-item"
                      value={address.label}
                      onClick={() => {
                        props.handleSelectBusiness(address.label);
                      }}
                    >
                      <MyText variant={"b2"} color={Theme.palette.text.high}>
                        {address.label}
                      </MyText>
                    </MenuItem>
                  );
                })}
                <Stack
                  direction={"row"}
                  paddingX={"1vw"}
                  spacing="0.5vw"
                  borderTop={"1px solid " + Theme.palette.grey[100]}
                  height="6vh"
                  alignItems={"center"}
                >
                  <MyText variant={"b2"} color={Theme.palette.text.medium}>
                    Can’t find your business?
                  </MyText>
                  <MyText variant={"b2"} color={Theme.palette.primary[500]}>
                    Enter your details
                  </MyText>
                </Stack>
              </Box>
              <Stack
                height="auto"
                width="auto"
                bgcolor={Theme.palette.grey[100]}
                paddingTop={"1vh"}
              >
                <Stack>
                  <Image height="43%" src="./Assets/icons/scrolldown.svg" />
                </Stack>
                <Box
                  marginX={"0.15vw"}
                  marginTop={"1vh"}
                  bgcolor={Theme.palette.otherColors.icon2}
                  width={"0.9vw"}
                  minHeight={"3vh"}
                  marginBottom={"22vh"}
                ></Box>
                <Stack>
                  <Image height="43%" src="./Assets/icons/scrollup.svg" />
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default BusinessSearch;
