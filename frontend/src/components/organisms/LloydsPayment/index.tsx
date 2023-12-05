import Stack from "@mui/material/Stack";
import MyText from "../../atoms/Typography";
import React from "react";
import Theme from "../../../themes";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { Paper, ThemeProvider } from "@mui/material";
import {
  BankAccountType,
  BankAmount,
  BankDetails1,
  BankDetails2,
  BankHeading,
  BankIcons,
} from "../../../utils/constants";

interface LloydsPaymentProps{
  continueToPay ?: any
}

export const LloydsPayment = (props:LloydsPaymentProps) => {
  return (
    <ThemeProvider theme={Theme}>
    <Stack data-testid="lloyds-payment" width={'31.5vw'} spacing={'2vh'}>
      <MyText variant={'h1'}>{BankHeading}</MyText>
      <Paper
        sx={{
          width:"27.9vw",
          paddingX: '1.7vw',
          paddingY: '3vh'
        }}
      >
        <Stack spacing={'3vh'}>
          <MyText
            variant={'b3'}
            color={Theme.palette.text.medium}
          >
            You'll be redirected to Lloyds, where you can securely log in to
            your own {BankAccountType} account and approve the payment for your{" "}
            {BankAmount} transfer.
          </MyText>

          <MyText variant={'b1'} color={Theme.palette.text.high}>
            Safe and Secure
          </MyText>
          <MyText
            variant={'b3'}
            color={Theme.palette.text.medium}
          >
            <ul>
              <li>{BankDetails1}</li>
              <li>{BankDetails2}</li>
            </ul>
          </MyText>
          <Stack alignItems={"center"}>
            <Image
              src={BankIcons}
              sx={{ width: Theme.spacing(46), height: Theme.spacing(15) }}
            />
          </Stack>
          <Stack alignItems={"center"}>
            <Button
              variant={"contained"}
              name={<MyText variant={'b2'}>Continue to pay</MyText>}
              onClick={props.continueToPay}
              sx={{
                textTransform: "none",
                width: "11.8vw",
                height: "5.9vh",
                borderRadius: Theme.spacing(14),
              }}
            />
          </Stack>
          <Stack alignItems={"center"}>
            <Button
              variant="outlined"
              name={<MyText variant={'b2'}>Pay manually</MyText>}
              sx={{
                textTransform: "none",
                width: "11.8vw",
                height: "5.9vh",
                borderRadius: Theme.spacing(14),
              }}
            />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
    </ThemeProvider>
  );
};
