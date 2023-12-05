import { Stack } from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import {
  ReviewDetailsTitle,
  TransferDetails,
  ReviewDetails as Review,
  ScheduleDetais,
  TransferDetailsReview,
} from "../../../utils/constants";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { InputField } from "../../atoms/InputField";
import { Theme } from "../../../themes";
import { useSelector } from "react-redux";

interface ReviewDetailsProps {
  handleConfirmButton?: any;
  currency?: any;
  setCurrency?: any;
  recipientData?: any;
  setRecipientData?: any;
}

const ReviewDetails = (props: ReviewDetailsProps) => {
  const [transfer, editTransfer] = useState(false);

  const [review, editReview] = useState(false);
  const amount = useSelector((state: any) => state.currency);
  const recipient = useSelector((state: any) => state.recipients);

  const editReviewDetails = () => {
    console.log("review details");
    editReview(!review);
  };

  const editTransferDetails = () => {
    console.log("transfer details");
    editTransfer(!transfer);
  };
  const changeAmount = (event: any) => {
    if (event.target.name === "send")
      props.setCurrency({
        ...props.currency,
        [event.target.name]: event.target.value + " GBP",
        recieve: event.target.value*1.1468 + " EUR",
      });
  };

  const changeRecipientDetails = (e: any) => {
    props.setRecipientData({
      ...props.recipientData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Stack
      data-testid="review"
      gap={'3vh'}
      width={'30vw'}
      height={"67vh"}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <MyText variant={"h1"} color={Theme.palette.text.high}>
        {ReviewDetailsTitle}
      </MyText>
      {!transfer && !review && (
        <Stack gap={'4vh'} width="27.9vw">
          <Stack gap={Theme.spacing(4)}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                Transfer details
              </MyText>
              <MyText
                data-testid="edit-transfer"
                variant={"linkText"}
                color={Theme.palette.primary[500]}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={editTransferDetails}
              >
                Edit
              </MyText>
            </Stack>
            <Stack gap={'1.5vh'}>
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
              {TransferDetails.map((transfer) => {
                const [key, value] = Object.entries(transfer)[0];
                return (
                  <Stack
                    direction="row"
                    key={key}
                    justifyContent={"space-between"}
                  >
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
          </Stack>

          <Stack gap={'1.5vh'}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                Recipient details
              </MyText>
              <MyText
                data-testid="recipient-edit"
                variant={"linkText"}
                color={Theme.palette.primary[500]}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={editReviewDetails}
              >
                Changes
              </MyText>
            </Stack>
            <Stack gap={'1.5vh'}>
              {Review.map((transfer, index) => {
                const [key] = Object.entries(transfer)[0];
                let valueToShow = "";

                if (index === 0) {
                  valueToShow = recipient.firstname + " " + recipient.lastname;
                } else if (index === 1) {
                  valueToShow = recipient.email;
                } else if (index === 2) {
                  valueToShow = recipient.accno;
                } else if (index === 3) {
                  valueToShow = recipient.acctype;
                }

                return (
                  <Stack
                    direction="row"
                    key={key}
                    justifyContent={"space-between"}
                  >
                    <MyText variant={"b2"} color={Theme.palette.text.medium}>
                      {key}:
                    </MyText>
                    <MyText variant={"b2"} color={Theme.palette.text.high}>
                      {valueToShow}
                    </MyText>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>

          <Stack gap={'1.5vh'}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
                Schedule Details
              </MyText>
              <MyText
                variant={"linkText"}
                color={Theme.palette.primary[500]}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Edit
              </MyText>
            </Stack>
            <Stack gap={'1.5vh'}>
              {ScheduleDetais.map((transfer, index) => {
                const [key, value] = Object.entries(transfer)[0];
                return (
                  <Stack
                    direction="row"
                    key={key}
                    justifyContent={"space-between"}
                  >
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
          </Stack>
          <Stack alignItems={"center"} height={"20vh"} gap={'4vh'}>
            <Stack>
              <Stack alignItems={"center"}>
                <MyText variant={"c1"} color={Theme.palette.text.medium}>
                  When you press "Confirm", you
                </MyText>
              </Stack>
              <MyText variant={"c1"} color={Theme.palette.text.medium}>
                agree with Wise Terms & Conditions
              </MyText>
            </Stack>
            <Button
              data-testid="confirm-review"
              variant={"contained"}
              sx={{
                width: "11.8vw",
                height: "5.9vh",
                textTransform: "none",
                borderRadius: Theme.spacing(16),
              }}
              color={"primary"}
              onClick={props.handleConfirmButton}
              name={<MyText variant={'b2'}>Confirm and continue</MyText>}
            />
          </Stack>
        </Stack>
      )}
      {transfer && (
        <Stack spacing={'3vh'} >
          <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
            Transfer details
          </MyText>
          <InputField
            name="send"
            data-testid="Amount-input"
            variant="outlined"
            label={"Amount"}
            defaultValue={amount.send}
            onChange={changeAmount}
          />
          {TransferDetailsReview.map((transfee, index) => {
            const [key, value] = Object.entries(transfee)[0];
            return (
              <InputField
                key={key}
                variant="outlined"
                label={key}
                defaultValue={value}
                disabled
              />
            );
          })}
          <Stack direction={"row"} gap={"1.5vw"} paddingLeft={"15vw"}>
            <Button
              variant={"contained"}
              sx={{
                width: "8vw",
                boxShadow:
                  "0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12)",
                height: "6vh",
                textTransform: "none",
                borderRadius: Theme.spacing(14),
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
                borderRadius: Theme.spacing(14),
                backgroundColor: Theme.palette.primary[500],
                "&:hover": {
                  backgroundColor: Theme.palette.primary[300],
                },
              }}
              onClick={() => {
                editTransfer(false);
              }}
              name={
                <MyText
                  variant={"b2"}
                  color={Theme.palette.structuralColors.white}
                >
                  Save
                </MyText>
              }
            />
          </Stack>
        </Stack>
      )}
      {review && (
        <Stack
          spacing={'4vh'}
          height={"52vh"}
          data-testid="review-stack"
        >
          <MyText variant={"c1"} color={Theme.palette.text.lowemphasis}>
            Business details
          </MyText>
          {Review.map((review, index) => {
            const [key] = Object.entries(review)[0];
            let fieldName = "";
            let defaultValue = "";

            switch (key) {
              case "Name":
                fieldName = "name";
                defaultValue = recipient.firstname + " " + recipient.lastname;
                break;
              case "Email":
                fieldName = "email";
                defaultValue = recipient.email;
                break;
              case "Account Number":
                fieldName = "accno";
                defaultValue = recipient.accno;
                break;
              case "Account Type":
                fieldName = "acctype";
                defaultValue = recipient.acctype;
                break;
              default:
                break;
            }

            return (
              <InputField
                key={key}
                data-testid={"edit-recipient"}
                name={fieldName}
                variant="outlined"
                label={key}
                defaultValue={defaultValue}
                onChange={changeRecipientDetails}
              />
            );
          })}
          <Stack direction={"row"} gap={"1.5vw"} paddingLeft={"15vw"}>
            <Button
              variant={"contained"}
              sx={{
                width: "8vw",
                boxShadow:
                  "0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12)",
                height: "6vh",
                textTransform: "none",
                borderRadius: Theme.spacing(14),
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
                borderRadius: Theme.spacing(14),
                backgroundColor: Theme.palette.primary[500],
                "&:hover": {
                  backgroundColor: Theme.palette.primary[300],
                },
              }}
              onClick={() => {
                editReview(false);
              }}
              name={
                <MyText
                  variant={"b2"}
                  color={Theme.palette.structuralColors.white}
                >
                  Save
                </MyText>
              }
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
export default ReviewDetails;
