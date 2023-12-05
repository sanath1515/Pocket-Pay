import { Box, Button, Modal, Stack } from "@mui/material";
import React from "react";
import { Theme } from "../../../themes";
import { conformationalModelText } from "../../../utils/constants";
import MyText from "../../atoms/Typography";
export interface ConformationModalProps {
  onClick?: any;
  handleClose?:()=>void;
}
export const ConformationModal = (props: ConformationModalProps) => {
  
  return (
    <>
      <Modal open={true} onClose={props.handleClose} sx={{ left: "33%", top: "27%" }}>
        <Box
          width="29.3vw"
          height="36.7vh"
          borderRadius={Theme.spacing(4)}
          paddingLeft={Theme.spacing(6)}
          paddingRight={Theme.spacing(6)}
          paddingTop={Theme.spacing(6)}
          bgcolor={Theme.palette.structuralColors.white}
        >
          <Stack spacing={18}>
            <MyText
              sx={{
                paddingBottom: Theme.spacing(4),
                paddingTop: Theme.spacing(8),
              }}
              color={Theme.palette.text.medium}
              variant="b1"
            >
              {conformationalModelText.data}
              <br />
              {conformationalModelText.data1}
            </MyText>
            <Stack  alignItems="center" paddingTop={Theme.spacing(12)}>
              <Button
                variant="contained"
                onClick={props.handleClose}
                sx={{
                  borderRadius:Theme.spacing(14),
                  width: "9.16vw",
                  alignContent: "center",
                  height: "6.14vh",
                }}
              >
                {""}
                <MyText
                  color={Theme.palette.structuralColors.white}
                  variant={Theme.typography.b2}
                >
                  {conformationalModelText.buttonText}
                </MyText>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};