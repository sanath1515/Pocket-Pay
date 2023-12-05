import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { Theme } from "../../../themes";
import Stack from "@mui/material/Stack";
import MyText from "../../atoms/Typography";
import Image from "../../atoms/Image";
import { modalBody, modalHeading } from "../../../utils/constants";

const image = "./assets/Background.svg";
const email = "./assets/Email.svg";
const link = "./assets/Copylink.svg";

const SharingModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ paddingX: "34vw", paddingY: "18vh" }}
      >
        <Stack
          width="29.6vw"
          height="53.8vh"
          borderRadius={Theme.spacing(4)}
          paddingX={"1.5vw"}
          paddingTop={"3vh"}
          bgcolor={Theme.palette.structuralColors.white}
          direction="column"
          alignItems="center"
          onClick={handleClose}
        >
          <MyText variant={"b1"} py={"4vh"}>
            {modalHeading}
          </MyText>
          <Image
            src={image}
            alt={"background image not found"}
            width={"30%"}
            height={"28%"}
          />
          <Stack direction="row" spacing={"2.5vw"} paddingTop={"4vh"}>
            <Image
              src={email}
              width={"75%"}
              height={"75%"}
              alt={"email image not found"}
            />
            <Image
              src={link}
              width={"75%"}
              height={"75%"}
              alt={"link image not found"}
            />
          </Stack>
          <MyText
            variant={"b3"}
            color={Theme.palette.text.medium}
            paddingTop={'2vh'}
            sx={{
              textAlign:'center',
            }}
          >
            {modalBody}
          </MyText>
        </Stack>
      </Modal>
    </>
  );
};

export default SharingModal;
