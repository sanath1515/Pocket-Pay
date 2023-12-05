import { Box, Divider, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import Theme from "../../../themes";
import MyText from "../../atoms/Typography";
import ButtonImage from "../../molecules/ButtonImage";
import Image from "../../atoms/Image";
import {
  HomeMainConstants,
  mockServer,
  updates,
} from "../../../utils/constants";
import Button from "../../atoms/Button";
import axios from "axios";
import CancelModal from "../CancelModal";
import SharingModal from "../SharingModal";
import { useNavigate } from "react-router-dom";

interface HomeMainProps {
  cancelTransfer?: any;
  transferStatus?: string;
  transactionid?: any;
  name?: string;
  loading?: any;
  setLoading?: any;
}
export const HomeMain = (props: HomeMainProps) => {
  const key = ["key1", "key2"];
  const navigate=useNavigate()
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCancelModal, setShowCancleModal] = useState(false);

  const cancelTransfer = async () => {
    props.setLoading(true)
    setShowCancleModal(false);
    await axios.patch(mockServer + "transactions/" + props.transactionid, {
      status: "Cancelled",
    });
    navigate('/home')
    
  };

  const openShareModal = () => {
    setShowShareModal(true);
  };

  const openCancelTransferModal = () => {
    setShowCancleModal(true);
  };
  return (
    <Box
      borderRadius={Theme.spacing(1)}
      height={"65vh"}
      width={"80vw"}
      bgcolor={Theme.palette.structuralColors.white}
    >
      <Grid
        paddingX={"2vw"}
        height={"8.5vh"}
        width={"100%"}
        borderBottom={"1px solid" + Theme.palette.grey[100]}
      >
        <Stack direction={"row"} justifyContent={'space-between'}>
          <Stack direction={"row"} gap={"2vw"}>
            <MyText
              variant={"c1"}
              color={Theme.palette.primary[500]}
              marginTop={"4.8vh"}
              flexDirection={"column"}
              display={"flex"}
              sx={{
                cursor: "pointer",
              }}
            >
              {HomeMainConstants[0]}
              <Divider
                sx={{
                  marginTop: Theme.spacing(1.8),
                  borderBottom: "2px solid" + Theme.palette.primary[500],
                }}
              />
            </MyText>
            <MyText
              sx={{
                cursor: "pointer",
              }}
              variant={"c1"}
              color={Theme.palette.text.medium}
              marginTop={"4.8vh"}
            >
              {HomeMainConstants[1]}
            </MyText>
          </Stack>
          <Stack direction={"row"} gap={"1vw"}>
            <ButtonImage
              src={"./Assets/icons/dropdown.svg"}
              variant={"outlined"}
              buttonText={<MyText variant={'b2'}>{HomeMainConstants[2]}</MyText>}
              sx={{
                ":hover": {
                  backgroundColor: Theme.palette.structuralColors.blue,
                  borderColor: Theme.palette.grey[100],
                },
                cursor: "unset",
                textTransform: "none",
                backgroundColor: Theme.palette.structuralColors.blue,
                color: Theme.palette.text.high,
                height: '5vh',
                marginY: '1.7vh',
                borderColor: Theme.palette.grey[100],
              }}
            />
            <Image
              data-testid="opensharemodal"
              src="./Assets/icons/send.svg"
              onClick={openShareModal}
              sx={{ cursor: "pointer" }}
            />
            <Image src="./Assets/icons/question.svg" />
          </Stack>
        </Stack>
      </Grid>
      <Stack
        paddingX={'2vw'}
        paddingY={'3vh'}
        sx={{ gap: '2vh' }}
      >
        {updates.map((update, index) => (
          <Stack
            key={key[index]}
            direction={"row"}
            width="20.8vw"
            justifyContent={"space-between"}
          >
            {Object.entries(update).map(([key, value]) => (
              <React.Fragment key={key}>
                <MyText variant={"b2"} color={Theme.palette.text.medium}>
                  {key}:
                </MyText>
                <MyText variant={"b2"} color={Theme.palette.text.high}>
                  {key === "Set up by" ? props.name : props.transactionid}
                </MyText>
              </React.Fragment>
            ))}
          </Stack>
        ))}
        <Stack width="21.71vw" height="27vh" marginTop="3vh" paddingTop={"2vh"}>
          {props.transferStatus === "Sending" && (
            <Image width="120%" src="./Assets/icons/Transfer status.svg" />
          )}
          {props.transferStatus === "Cancelled" && (
            <Stack spacing={'3vh'} width={'65vw'}>
              <MyText variant={"b1"} color={Theme.palette.text.high}>
                {HomeMainConstants[4]}
              </MyText>
              <MyText variant={"b3"} color={Theme.palette.text.medium}>
                {HomeMainConstants[5]}
              </MyText>
            </Stack>
          )}
        </Stack>
        {props.transferStatus === "Sending" && (
          <Stack alignItems={"flex-end"} width={"100%"}>
            <Button
              data-testid="cancelButton"
              variant="contained"
              color="primary"
              sx={{
                boxShadow:
                  "0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12)",
                backgroundColor: Theme.palette.structuralColors.white,
                width: "11.25vw",
                height: "5.9vh",

                "&:hover": {
                  backgroundColor: Theme.palette.text.low,
                },
                textTransform: "none",
                borderRadius: Theme.spacing(14),
              }}
              name={
                <MyText variant={"b2"} color={Theme.palette.primary[500]}>
                  {HomeMainConstants[3]}
                </MyText>
              }
              onClick={openCancelTransferModal}
            />
          </Stack>
        )}
      </Stack>
      {showShareModal && <SharingModal />}
      {showCancelModal && <CancelModal closemodal={cancelTransfer} />}
    </Box>
  );
};
