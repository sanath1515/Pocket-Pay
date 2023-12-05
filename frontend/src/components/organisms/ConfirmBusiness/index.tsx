import React, { useState } from "react";
import { Theme } from "../../../themes";
import MyText from "../../atoms/Typography";
import Stack from "@mui/material/Stack";
import { InputField } from "../../atoms/InputField";
import {
  businessHeading,
  businessBody,
  businessCaption,
  businessName,
  businessNumber,
  businessAddress,
  editText,
  add1,
  num1,
} from "../../../utils/constants";
import Button from "../../atoms/Button";
interface ConfirmBusinessProps {
  handleConfirm?: any;
  businessDetails?: any;
  setBusinessDetails?: any;
}

const ConfirmBusiness = (props: ConfirmBusinessProps) => {
  const [view, setView] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.name === "name") {
      props.setBusinessDetails({
        ...props.businessDetails,
        businessName: e.target.value,
      });
    } else if (e.target.name === "no") {
      props.setBusinessDetails({
        ...props.businessDetails,
        registrationNumber: e.target.value,
      });
    } else if (e.target.name === "add") {
      props.setBusinessDetails({
        ...props.businessDetails,
        businessAddress: e.target.value,
      });
    }
  };

  if (props.businessDetails.registrationNumber === "") {
    props.setBusinessDetails({
      ...props.businessDetails,
      registrationNumber: num1,
    });
  }
  if (props.businessDetails.businessAddress === "") {
    props.setBusinessDetails({
      ...props.businessDetails,
      businessAddress: add1,
    });
  }

  return (
    <>
      <Stack
        width="35vw"
        height="67vh"
        direction="column"
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        spacing={'2vh'}
      >
        <Stack spacing={"2vh"} >
          <MyText variant={"h1"} color={Theme.palette.text.high}>
            {businessHeading}
          </MyText>
          <MyText variant={"b3"} color={Theme.palette.text.medium} sx={{width:'20vw'}}>
            {businessBody}
          </MyText>
        </Stack>
        <Stack
          width={'28vw'}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
            {businessCaption}
          </MyText>
          {!view && (
            <MyText
              variant={"linkText"}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => {
                setView(true);
              }}
              color={Theme.palette.primary[500]}
            >
              {editText}
            </MyText>
          )}
        </Stack>
        {!view && (
          <Stack spacing={Theme.spacing(10)}>
            <Stack spacing={Theme.spacing(3)}>
              <MyText variant={"b2"} color={Theme.palette.text.medium}>
                {businessName}
              </MyText>
              <MyText variant={"b2"} color={Theme.palette.text.high}>
                {props.businessDetails.businessName}
              </MyText>
            </Stack>
            <Stack spacing={Theme.spacing(3)}>
              <MyText variant={"b2"} color={Theme.palette.text.medium}>
                {businessNumber}
              </MyText>
              <MyText variant={"b2"} color={Theme.palette.text.high}>
                {props.businessDetails.registrationNumber}
              </MyText>
            </Stack>
            <Stack spacing={Theme.spacing(3)}>
              <MyText variant={"b2"} color={Theme.palette.text.medium}>
                {businessAddress}
              </MyText>
              <MyText variant={"b2"} color={Theme.palette.text.high} sx={{width:'28vw'}}>
                {props.businessDetails.businessAddress}
              </MyText>
            </Stack>
          </Stack>
        )}

        {view && (
          <Stack
            width="27.9vw"
            direction="column"
            spacing={Theme.spacing(8)}
          >
            <InputField
              id="name"
              variant="outlined"
              name="name"
              label="Business name"
              value={props.businessDetails.businessName}
              onChange={handleChange}
            ></InputField>
            <InputField
              id="no"
              variant="outlined"
              name="no"
              label="Registration number"
              value={props.businessDetails.registrationNumber}
              onChange={handleChange}
            ></InputField>
            <InputField
              id="add"
              variant="outlined"
              name="add"
              label="Registered address"
              value={props.businessDetails.businessAddress}
              onChange={handleChange}
              multiline
              rows={2}
            ></InputField>
            <Stack direction={"row"} gap={"1.5vw"} paddingLeft={"15vw"}>
              <Button
                variant={"contained"}
                sx={{
                  width: "8vw",
                  boxShadow:
                    "0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12)",
                  height: "6vh",
                  textTransform: "none",
                  borderRadius: "56px",
                  backgroundColor: Theme.palette.structuralColors.white,
                  "&:hover": {
                    backgroundColor: Theme.palette.structuralColors.buttonHover,
                  },
                }}
                name={
                  <MyText variant={"b2"} color={Theme.palette.primary[500]}>
                    Cancel
                  </MyText>
                }
              />
              <Button
                variant={"contained"}
                sx={{
                  width: "8vw",
                  boxShadow: " 0px 8px 24px rgba(85, 51, 255, 0.24)",
                  height: "6vh",
                  textTransform: "none",
                  borderRadius: "56px",
                  backgroundColor: Theme.palette.primary[500],
                  "&:hover": {
                    backgroundColor: Theme.palette.primary[300],
                  },
                }}
                onClick={() => {
                  setView(false);
                }}
                name={
                  <MyText
                    variant={"b2"}
                    color={Theme.palette.structuralColors.white}
                  >
                    {"Save"}
                  </MyText>
                }
              />
            </Stack>
          </Stack>
        )}
        {!view && (
          <Stack position={'absolute'} right={'25vw'} bottom={'10vh'}>
            <Button
              variant={"contained"}
              sx={{
                width: "6.5vw",
                boxShadow: " 0px 8px 24px rgba(85, 51, 255, 0.24)",
                height: "6vh",
                textTransform: "none",
                borderRadius: "56px",
                backgroundColor: Theme.palette.primary[500],
                "&:hover": {
                  backgroundColor: Theme.palette.primary[300],
                },
              }}
              onClick={props.handleConfirm}
              name={
                <MyText
                  variant={"b2"}
                  color={Theme.palette.structuralColors.white}
                >
                  {"Confirm"}
                </MyText>
              }
            />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default ConfirmBusiness;
