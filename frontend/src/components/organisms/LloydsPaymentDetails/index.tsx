import { Grid, Paper, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import {
  BankDetailsHeading,
  BankDetailsBankLogo,
  BankDetailsPaperHeading,
  BankDetailsPaperInfo,
  BankDetailsReferenceId,
  BankDetailsSortCode,
  BankDetailsBankAddress,
  mockServer,
} from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export const LloydsPaymentDetails = () => {
  const user = useSelector((state: any) => state.users);
  console.log(user);
  const purpose = useSelector((state: any) => state.purpose);
  const director = useSelector((state: any) => state.directors);
  const owner = useSelector((state: any) => state.owners);

  const Navigate = useNavigate();
  const amount = useSelector((state: any) => state.currency);
  const recip = useSelector((state: any) => state.recipients);
  return (
    <ThemeProvider theme={Theme}>
      <Stack
        spacing={Theme.spacing(2)}
        height={'65vh'}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <MyText variant={"h1"}>{BankDetailsHeading}</MyText>
        <Paper
          sx={{
            width: "27.9vw",
            padding: '2vw',
          }}
        >
          <Stack spacing={'2.7vh'}>
            <Stack alignItems={"center"}>
              <Image
                src={BankDetailsBankLogo}
                width={Theme.spacing(10)}
                height={Theme.spacing(10)}
              />
            </Stack>
            <Stack>
              <MyText variant={"b1"}>{BankDetailsPaperHeading}</MyText>
            </Stack>
            <Stack>
              <MyText variant={"c1"} color={Theme.palette.text.medium}>
                {BankDetailsPaperInfo}
              </MyText>
            </Stack>
            <Stack>
              <Grid container spacing={'2vh'}>
                <Grid item xs={6}>
                  <Stack>
                    <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                      Payee Name
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {recip.firstname + " " + recip.lastname}
                    </MyText>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <Stack>
                      <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                        Use this reference
                      </MyText>
                    </Stack>
                    <Stack>
                      <MyText variant={"b2"} color={Theme.palette.text.high}>
                        {BankDetailsReferenceId}
                      </MyText>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                      Amount to send
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {amount.send}
                    </MyText>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                      UK Sort code
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {BankDetailsSortCode}
                    </MyText>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack>
                    <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                      Account number
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {recip.accno}
                    </MyText>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                      Our bank adddress
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {BankDetailsBankAddress}
                    </MyText>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack>
              <MyText>
                You can use your Lloyds
                <Button
                  variant="text"
                  name="online banking"
                  sx={{ textTransform: "none", textDecoration: "underline" }}
                />
                or mobile app to make your bank transfer to Wise
              </MyText>
            </Stack>
            <Stack alignItems={"center"}>
              <Button
                variant={"contained"}
                name={<MyText variant={'b2'}>Continue</MyText>}
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
                      alert("transaction failed");
                    });
                }}
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
                name={<MyText variant={'b2'}>Cancel this transfer</MyText>}
                onClick={() => {
                  Navigate("/home");
                }}
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
