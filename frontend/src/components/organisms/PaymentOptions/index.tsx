import { Stack } from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import { Theme } from "../../../themes";
import IconTextRadio from "../../molecules/IconTextRadio";

export interface PaymentOptionsProps{
  onRadioChange?: any;
}
export const PaymentOptions = (props:PaymentOptionsProps) => {

  const [selectedRadioValue, setSelectedRadioValue] = useState("");

  const radioChangeHandler = (event: any) => {
    setSelectedRadioValue(event.target.value)
    props.onRadioChange(event.target.value);
  };

  return (
    <Stack sx={{ width: "27.9vw" }}   data-testid="PaymentOptions" spacing={'2vh'}>
      <Stack>
        <MyText variant={"h1"} color={Theme.palette.text.high}>Choose your transfer type</MyText>
      </Stack>
      <Stack spacing={'2vh'}>
        <Stack spacing={'1vh'}>
          <MyText variant={"c1"} color={Theme.palette.text.medium}>
            Fast and easy transfer
          </MyText>
          <Stack spacing={'0.5vh'}>
            <IconTextRadio
              radioId="debitcard-pay"
              value="debit"
              checked={selectedRadioValue === "debit"}
              radiochange={radioChangeHandler}
              titleColor={Theme.palette.text.high}
              titleVariant={"b3"}
              spacing={'0.5vw'}
              stackHeight={'10vh'}
              radioelement
              src={"./assets/icons/debitcard.svg"}
              title="Debit card"
              singleText
              multiText={
                <Stack>
                  <MyText variant={"c1"} color={Theme.palette.text.medium}>
                    Send from your Visa or Mastercard.
                  </MyText>
                  <MyText variant={"c1"} color={Theme.palette.text.medium}>
                    Should arrive by January 28th.
                  </MyText>
                </Stack>
              }
              radiosize={"small"}
            />
            <IconTextRadio
              checked={false}
              titleColor={Theme.palette.text.high}
              titleVariant={"b3"}
              radioelement
              spacing={Theme.spacing(4)}
              stackHeight={Theme.spacing(25.75)}
              src={"./assets/icons/debitcard.svg"}
              title="Credit card"
              singleText
              multiText={
                <Stack>
                  <MyText variant={"c1"} color={Theme.palette.text.medium}>
                    Send from your Visa or Mastercard.
                  </MyText>
                  <MyText variant={"c1"} color={Theme.palette.text.medium}>
                    Should arrive by January 28th.
                  </MyText>
                </Stack>
              }
              radiosize={"small"}
            />
          </Stack>
        </Stack>
        <Stack spacing={Theme.spacing(3)}>
          <MyText variant={"c1"} color={Theme.palette.text.high}>
            Low cost transfer
          </MyText>
          <IconTextRadio
            radioId="lloydsBank-pay"
            value="bank"
            checked={selectedRadioValue === "bank"}
            radiochange={radioChangeHandler}
            titleColor={Theme.palette.text.high}
            titleVariant={"b3"}
            radioelement
            spacing={Theme.spacing(4)}
            stackHeight={Theme.spacing(25.75)}
            src={"./assets/icons/bank.svg"}
            title="Transfer from your bank account"
            singleText
            multiText={
              <Stack>
                <MyText variant={"c1"} color={Theme.palette.text.medium}>
                  Transfer the money using bank account.
                </MyText>
                <MyText variant={"c1"} color={Theme.palette.text.medium}>
                  Should arrive by January 28th.
                </MyText>
              </Stack>
            }
            radiosize={"small"}
          />
        </Stack>
        <Stack spacing={Theme.spacing(3)}>
          <MyText variant={"c1"} color={Theme.palette.text.high}>
            Account transfer
          </MyText>
          <IconTextRadio
            checked={false}
            titleColor={Theme.palette.text.high}
            titleVariant={"b3"}
            radioelement
            spacing={Theme.spacing(5)}
            stackHeight={Theme.spacing(25.75)}
            src={"./assets/icons/globe.svg"}
            title="SWIFT Transfer"
            singleText
            multiText={
              <Stack>
                <MyText variant={"c1"} color={Theme.palette.text.medium}>
                  Send GBP from your bank account outside the UK.
                </MyText>
                <MyText variant={"c1"} color={Theme.palette.text.medium}>
                  Should arrive by January 28th.
                </MyText>
              </Stack>
            }
            radiosize={"small"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};