import { Stack } from "@mui/material";
import React, { useState } from "react";
import Theme from "../../../themes";
import { bankOptions, ChooseBank } from "../../../utils/constants";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import { InputField } from "../../atoms/InputField";
import MyText from "../../atoms/Typography";
import SureModal from "../SureModal";
import { LloydsPayment } from "../LloydsPayment";

interface SelectingBankProps {
  lylodsPayment?: boolean;
  setLylodsPayment?: any;
  continueToPay?: any;
}

export const SelectingBank = (props: SelectingBankProps) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [open, setOpen] = useState(false);
  const handleModelOpen = () => {
    setOpen(true);
  };
  const handleModelClose = () => {
    setOpen(false);
  };
  const handleclick = (name: string) => {
    if (name === "Lloyds") {
      setSelectedBank("Lloyds");
      props.setLylodsPayment(true);
    }
  };
  return (
    <Stack
      data-testid="select-bank"
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      height={'68vh'}
    >
      {!props.lylodsPayment ? (
        <Stack direction={"column"}>
          <MyText color={Theme.palette.text.high} variant="h1">
            {ChooseBank}
          </MyText>
          <Stack
            direction={"column"}
            paddingTop={'3vh'}
          >
            <InputField placeholder="Start typing to search"></InputField>
          </Stack>

          <Stack
            direction={"column"}
            spacing={Theme.spacing(1)}
            paddingTop={'2vh'}
            sx={{
              "& > *:hover": {
                backgroundColor: Theme.palette.text.low,
              },
              cursor: selectedBank === "Lloyds" ? "cursor" : "pointer",
            }}
          >
            {bankOptions.map((option) => {
              return (
                <Stack
                  key={option.name}
                  data-testid={option.name}
                  direction={"row"}
                  sx={{ width: "26.5vw", height: "5.4vh" }}
                  alignItems="center"
                  justifyContent="space-between"
                  paddingX={'0.5vw'}
                  onClick={() => {
                    handleclick(option.name);
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems="center"
                    gap={Theme.spacing(3.74)}
                  >
                    <Image src={option.src} height={Theme.spacing(7)} />
                    <MyText color={Theme.palette.text.high} variant="c1">
                      {option.name}
                    </MyText>
                  </Stack>
                  <Image src="/assets/icons/arrow-right.svg"></Image>
                </Stack>
              );
            })}
          </Stack>
          <Stack sx={{ paddingTop: '3vh' }}>
            <Stack alignItems={"center"} sx={{ width: "27.9vw" }}>
              <Button
                variant="text"
                name={<MyText variant={'b2'}>Cancel the transfer</MyText>}
                sx={{
                  height: "6vh",
                  width: "12vw",
                  borderRadius: Theme.spacing(16),
                  textTransform: "none",
                  boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.05)",
                }}
                onClick={handleModelOpen}
              />
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <LloydsPayment continueToPay={props.continueToPay} />
      )}

      <SureModal open={open} handleClose={handleModelClose} />
    </Stack>
  );
};
