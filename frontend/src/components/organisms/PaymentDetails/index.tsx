import { Stack } from "@mui/material";
import React from "react";
import Theme from "../../../themes";
import MyText from "../../atoms/Typography";
import Image from "../../atoms/Image";
import { ReviewDetails, TransferDetails } from "../../../utils/constants";
import Button from "../../atoms/Button";
import { useSelector } from "react-redux";

interface PaymentDetailsProps {
  onClick?: any;
  purchase?: boolean;
}
const PaymentDetails = (props: PaymentDetailsProps) => {
  const amount = useSelector((state: any) => state.currency);
  const recip = useSelector((state: any) => state.recipients);

  return (
    <Stack
      data-testid="PaymentDetails"
      paddingX={'2vw'}
      paddingY={'5vh'}
      width="25.7vw"
      height={props.purchase?"auto":"59vh"}
      border={Theme.palette.borderColors.prime}
      bgcolor={Theme.palette.structuralColors.white}
      borderRadius={Theme.spacing(4)}
      spacing={'4vh'}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
    >
      <Stack gap={'1.3vh'}>
        <MyText
          variant={"c1"}
          color={Theme.palette.text.lowemphasis}
          sx={{ paddingBottom: Theme.spacing(1) }}
        >
          Transfer details
        </MyText>
        <Stack direction={"row"} spacing={Theme.spacing(3.5)}>
          <MyText variant={"b2"} color={Theme.palette.text.high}>
            {amount.send}
          </MyText>
          <Image
            src="./Assets/icons/arrowleft.svg"
            alt="left arrow"
            width={Theme.spacing(3.925)}
          />
          <MyText variant={"b2"} color={Theme.palette.text.high}>
            {amount.recieve}
          </MyText>
        </Stack>
        {TransferDetails.map((transfer, index) => {
          const [key, value] = Object.entries(transfer)[0];
          return (
            <Stack direction="row" key={key} justifyContent={"space-between"}>
              <MyText variant={"b2"} color={Theme.palette.text.medium}>
                {key}:
              </MyText>
              <MyText variant={"b2"} color={Theme.palette.text.high}>
                {value}
              </MyText>
            </Stack>
          );
        })}
      </Stack>
      <Stack gap={'1.3vh'}>
        <MyText
          variant={"c1"}
          color={Theme.palette.text.lowemphasis}
          sx={{ paddingBottom: Theme.spacing(1) }}
        >
          Transfer details
        </MyText>
        {ReviewDetails.map((recipient, index) => {
          const [key] = Object.entries(recipient)[0];
          let result;
          if (index === 0) {
            result = recip.firstname + " " + recip.lastname;
          } else if (index === 1) {
            result = recip.email;
          } else if (index === 2) {
            result = recip.accno;
          } else if (index === 3) {
            result = recip.acctype;
          } else {
            result = "";
          }
          return (
            <Stack direction="row" key={key} justifyContent={"space-between"}>
              <MyText variant={"b2"} color={Theme.palette.text.medium}>
                {key}:
              </MyText>
              <MyText variant={"b2"} color={Theme.palette.text.high}>
               {result}
              </MyText>
            </Stack>
          );
        })}
      </Stack>
      {!props.purchase && (
        <Stack
          alignItems={"centre"}
          gap={'2vh'}
          paddingX={'7vw'}
        >
          <Button
            data-testId="continueToPay"
            variant={"contained"}
            color="primary"
            onClick={props.onClick}
            sx={{
              width: "11.8vw",
              height:"5.9vh",
              borderRadius: Theme.spacing(14),
              textTransform: "none",
            }}
            name={
              <MyText
                variant={"b2"}
                color={Theme.palette.structuralColors.white}
              >
                Continue to Pay
              </MyText>
            }
          ></Button>
          <Button
            variant={"contained"}
            sx={{
              width: "11.8vw",
              height:"5.9vh",
              textTransform: "none",
              borderRadius: Theme.spacing(14),
              backgroundColor: Theme.palette.structuralColors.white,
              "&:hover": {
                backgroundColor: Theme.palette.text.low,
              },
            }}
            name={
              <MyText variant={"b2"} color={Theme.palette.primary[500]}>
                Cancel this transfer
              </MyText>
            }
          ></Button>
        </Stack>
      )}
    </Stack>
  );
};

export default PaymentDetails;
