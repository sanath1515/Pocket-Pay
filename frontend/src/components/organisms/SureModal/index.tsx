import Modal from "@mui/material/Modal";
import React from "react";
import { Theme } from "../../../themes";
import Stack from "@mui/material/Stack";
import MyText from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { sureBody, sureHeading } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

interface SureModalProps {
  open?:any;
  handleClose?:any
}

const SureModal = (props:SureModalProps) => {
  const Navigate = useNavigate()
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        sx={{ paddingX: '35vw', paddingY: '30vh' }}
      >
        <Stack
          width="30.5vw"
          height="35.4vh"
          borderRadius={Theme.spacing(4)}
          bgcolor={Theme.palette.structuralColors.white}
          direction="column"
          alignItems="center"
          border={"1px solid black"}
        >
          <MyText
            variant={'h1'}
            color={Theme.palette.text.high}
            paddingTop={'4.5vh'}
          >
            {sureHeading}
          </MyText>
          <MyText
            variant={'b1'}
            color={Theme.palette.text.medium}
            paddingBottom={'12vh'}
          >
            {sureBody}
          </MyText>
          <Stack direction="row" spacing={Theme.spacing(5)}>
            <Button
              variant="contained"
              sx={{
                width: "7.3vw",
                height: "5.9vh",
                borderRadius: Theme.spacing(14),
                textTransform: "none",
              }}
              name="Yes"
              onClick={()=>{
                Navigate('/home')
              }}
            />

            <Button
              variant="outlined"
              onClick={props.handleClose}
              sx={{
                width: "7.3vw",
                height: "5.9vh",
                borderRadius: Theme.spacing(14),
                textTransform: "none",
              }}
              name="No"
            />
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default SureModal;
