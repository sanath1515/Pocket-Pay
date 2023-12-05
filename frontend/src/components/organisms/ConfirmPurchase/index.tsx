import { Divider, Stack } from "@mui/material";
import React from "react";
import Theme from "../../../themes";
import Image from "../../atoms/Image";
import MyText from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { mockServer } from "../../../utils/constants";
import { useSelector } from "react-redux";

const detail1 = "GBP 100.00 to PocketPay using visa card ending 9313";
const detail2 =
  "Step 1: Open and confirm the push notification we sent to your mobile.";
const detail3 =
  "Step 2: Return to this screen and press the button below to finish your purchase.";

export const ConfirmCardPurchase = () => {
  const recip = useSelector((state: any) => state.recipients);
  const amount = useSelector((state: any) => state.currency);
  const purpose = useSelector((state: any) => state.purpose);
  const director = useSelector((state: any) => state.directors);
  const owner = useSelector((state: any) => state.owners);
  const Navigate = useNavigate();
  const user = useSelector((state: any) => state.users);
  console.log(user);
  return (
    <Stack direction="column" data-testid="ConfirmCard">
      <Stack
        sx={{
          width: "24.5vw",
          borderRadius: Theme.spacing(4),
          paddingBottom: "3vh",
        }}
        border={"1px solid" + Theme.palette.otherColors.stroke2}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          padding={Theme.spacing(4)}
        >
          <Image
            src="./assets/icons/Icon.svg"
            width={Theme.spacing(10)}
            height={Theme.spacing(10)}
          />
          <Image
            src="./assets/icons/visa.svg"
            width={Theme.spacing(10)}
            height={Theme.spacing(10)}
          />
        </Stack>
        <Divider sx={{ width: "24.5vw" }} />
        <Stack padding={Theme.spacing(5)} spacing={Theme.spacing(6)}>
          <MyText variant={"b1"} color={Theme.palette.text.high}>
            Confirm your purchase
          </MyText>
          <MyText variant={"c1"} color={Theme.palette.text.medium}>
            {detail1}
          </MyText>
          <MyText variant={"c1"} color={Theme.palette.text.medium}>
            {detail2}
          </MyText>
          <MyText variant={"c1"} color={Theme.palette.text.medium}>
            {detail3}
          </MyText>
        </Stack>
        <Stack alignItems={"center"}>
          <Button
            variant="contained"
            name={<MyText variant={"b2"}>Complete</MyText>}
            onClick={async () => {
              const currentTime = new Date();
              const formattedTime = currentTime.toLocaleTimeString("en-US", {
                hour12: false,
              });

              const transaction = {
                status: "Sending",
                sendingAmount: amount.send,
                guarantedRate: "1.196%",
                recievingAmount: amount.recieve,
                fee: "0",
                time: formattedTime,
                referenceNo:
                  String(Math.floor(Math.random() * 9999) + 1) +
                  recip.firstname,
                purpose: purpose,
                user: {
                  id: user.id,
                },
                bank: {
                  ifscCode: "llyds123",
                },
                recipient: {
                  email: recip.email,
                  accNo: recip.accno,
                  firstName: recip.firstname,
                  lastName: recip.lastname,
                  bank: {
                    ifscCode: "llyds123",
                  },
                  accountType: recip.acctype,
                },
              };
              var recipient_id: any;
              await axios
                .post(mockServer + "transactions", { ...transaction })
                .then(async(response: any) => {
                  recipient_id = response.data.recipient.id;
                  console.log(recipient_id);

                  await axios
                    .post(mockServer + "transactions/owners", {
                      ...director[0],
                      recipient: {
                        id: recipient_id,
                      },
                    })
                    .then(async () => {
                      console.log("uploaded directors successfully");
                      await axios
                      .post(mockServer + "transactions/owners", {
                        ...owner[0],
                        recipient: {
                          id: recipient_id,
                        },
                      })
                    })
                    .catch(() => {
                      console.log("failed to upload owners");
                    });
                    Navigate("/home");
                 
                })
                .catch((e: any) => {
                  Navigate("/home");
                  alert("Transaction Failed");
                });
            }}
            sx={{
              width: "7.08vw",
              height: "6.14vh",
              borderRadius: Theme.spacing(14),
              textTransform: "none",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
