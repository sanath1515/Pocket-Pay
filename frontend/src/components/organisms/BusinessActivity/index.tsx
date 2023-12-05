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
import MyText from "../../atoms/Typography";
import Image from "../../atoms/Image";
import { InputField } from "../../atoms/InputField";

export interface BusinessActivityProps {
  onClick?: any;
  businessDetails?: any;
  setBusinessDetails?: any;
  setDisabled?: any;
}

export const BusinessActivity = (props: BusinessActivityProps) => {
  const categories = [
    "Design, marketing or communication",
    "Health, sports or personal care",
    "Education or learning",
    "Others",
    "Real estate or construction",
  ];

  const subcategories = [
    "Real estate",
    "Real estate sale, purchase and management",
    "Real estate or construction",
    "Education or learning",
    "Others",
  ];

  const sizes = ["50-100", "100-200", "200-500", "500-600", "Others"];

  const selectFields = [categories, subcategories, sizes];
  const labels = ["Category", "Subcategory", "Size of your business"];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const values = [value1, value2, value3];
  const setValues = [setValue1, setValue2, setValue3];

  const handleChange = (event: any, index: number) => {
    const selected = event.target.value as string;
    setValues[index](selected);
    if (index === 0) {
      props.setBusinessDetails({
        ...props.businessDetails,
        category: event.target.value,
      });
    } else if (index === 1) {
      props.setBusinessDetails({
        ...props.businessDetails,
        subCategory: event.target.value,
      });
    } else if (index === 2) {
      props.setBusinessDetails({
        ...props.businessDetails,
        sizeOfBusiness: event.target.value,
      });
    }
  };

  if (value1 && value2 && value3) {
    props.setDisabled(false);
  }

  const downIcon = () => {
    return <Image src={"./Assets/icons/dropdown.svg"} alt="dropdown" />;
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          height: "65vh",
          width: "35vw",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack spacing="3vh">
          <Stack direction="column" spacing={5}>
            <MyText variant="h1" color={Theme.palette.text.high}>
              Help us verify your account faster
            </MyText>
            <MyText variant="b3" color={Theme.palette.text.medium}>
              Without this information, we can't verify your account
            </MyText>
          </Stack>
          <Stack direction="column" >
            {selectFields.map((items: string[], index: number) => (
              <FormControl key={labels[index]}>
                {!values[index] && (
                  <InputLabel sx={{ paddingX: '0.5vw', paddingY:'2.2vh' }}>
                    <MyText variant="b2" color={Theme.palette.text.lowemphasis}>
                      {labels[index]}
                    </MyText>
                  </InputLabel>
                )}
                <InputField
                  id={index===2?"size":labels[index]}
                  height={"6.5vh"}
                  variant="outlined"
                  value={values[index]}
                  label={values[index] ? labels[index] : ""}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    handleChange(e, index)
                  }
                  select
                  SelectProps={{
                    IconComponent: downIcon,
                  }}
                >
                  {items.map((item: string) => (
                    <MenuItem
                      key={item}
                      value={item}
                      sx={{ width: "auto", height: "6vh" }}
                    >
                      <MyText>{item}</MyText>
                    </MenuItem>
                  ))}
                </InputField>
              </FormControl>
            ))}
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
