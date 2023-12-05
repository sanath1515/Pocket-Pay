import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { Theme } from "../../../themes";
import MyText from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { InputField } from "../../atoms/InputField";
import Image from "../../atoms/Image";
import {
  cancelBody,
  cancelHeading,
  exiAcc,
  newAcc,
  selAcc,
} from "../../../utils/constants";

interface CancelModalProps {
  onClick?: any;
  closemodal?:any;
}
const CancelModal = (props: CancelModalProps) => {
  const account = [{ value: "val 1", label: "An Existing Account", title: "" }];
  const user = [
    {
      value: "Option 1",
      label: "Ross Gener",
      title: "Ending in 4656",
      acc: "xxxx xxxx 4656",
    },
    {
      value: "Option 2",
      label: "Ross Gener",
      title: "Ending in 4242",
      acc: "xxxx xxxx 4242",
    },
  ];
  const [value, setValue] = useState("");

  const handleChange = async (event: any) => {
    const selected = (await event.target.value) as string;
    console.log(selected);
    user.forEach((ele) => {
      if (ele.value === selected) {
        console.log("true");
        setValue(selected);
      }
    });
  };

  const renderValue = (selected: any) => {
    const selectedField = user.find(
      (option: { value: any }) => option.value === selected
    );

    return selectedField ? (
      <Stack direction={"row"} justifyContent={"space-between"}>
        <MyText variant={"b2"} color={Theme.palette.text.high}>
          {selectedField.label}
        </MyText>
        <MyText variant={"b2"} color={Theme.palette.text.high}>
          {selectedField.acc}
        </MyText>
      </Stack>
    ) : (
      ""
    );
  };

  const [view, setView] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          paddingX: '33vw',
          paddingY: '25vh',
        }}
      >
        <Box
          width={'30.5vw'}
          height={'auto'}
          borderRadius={Theme.spacing(4)}
          paddingX={'1.5vw'}
          paddingY={'2.5vh'}
          bgcolor={Theme.palette.structuralColors.white}
        >
          <Stack spacing={'3vh'}>
            <MyText color={Theme.palette.text.high} variant="b1">
              {cancelHeading}
            </MyText>
            <MyText
              variant="c1"
              color={Theme.palette.text.lowemphasis}
              paddingBottom={'1vh'}
            >
              {cancelBody}
            </MyText>
          </Stack>
          {!view && (
            <Stack
              paddingX={'1vw'}
              paddingY={'1vh'}
              width={'28.3vw'}
              height={'20vh'}
              spacing={'5vh'}
              border={Theme.palette.borderColors.prime}
              borderRadius={Theme.spacing(2)}
              justifyContent={"space-evenly"}
            >
              <MyText
                sx={{ cursor: "pointer" }}
                color={Theme.palette.text.medium}
                variant="b2"
              >
                {selAcc}
              </MyText>
              <MyText
                data-testid={"view"}
                sx={{ cursor: "pointer" }}
                color={Theme.palette.text.high}
                variant="b2"
                onClick={() => {
                  setView(!view);
                }}
              >
                {exiAcc}
              </MyText>
              <MyText
                sx={{ cursor: "pointer" }}
                color={Theme.palette.text.high}
                variant="b2"
              >
                {newAcc}
              </MyText>
            </Stack>
          )}

          {view && (
            <Stack  width={'30.2vw'}>
              {[account, user].map((item, idx) => {
                return (
                  <FormControl>
                    <InputLabel sx={{px:'0.5vw',paddingTop:'1.8vh'}}>
                      <MyText
                        variant={"b2"}
                        color={
                          idx === 0
                            ? Theme.palette.text.high
                            : Theme.palette.text.lowemphasis
                        }
                      >
                        {idx === 0
                          ? "An existing account"
                          : idx === 1 && !value
                          ? "Select an option"
                          : ""}
                      </MyText>
                    </InputLabel>
                    <InputField
                      id={idx===1?"cancel":""}
                      data-testid={idx === 1 ? "cancel-transfer" : ""}
                      width={'30.2vw'}
                      value={value}
                      disabled={idx === 0}
                      height={Theme.spacing(15)}
                      variant="outlined"
                      select
                      SelectProps={{
                        renderValue: idx === 1 ? renderValue : null,
                        IconComponent: () => (
                          <Image
                            src="./Assets/icons/dropdown.svg"
                            alt="dropdown-svg"
                          />
                        ),
                      }}
                      onChange={
                        idx === 1
                          ? (e: any) => {
                              handleChange(e);
                            }
                          : null
                      }
                    >
                      {item.map((i) => {
                        return (
                          <MenuItem
                            data-testid="listbox"
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              paddingY: Theme.spacing(2.75),
                              paddingX: Theme.spacing(6),
                            }}
                            key={i.value}
                            value={i.value}
                          >
                            <MyText variant={"c1"}>{i.label}</MyText>
                            <MyText
                              variant={"c1"}
                              color={Theme.palette.text.lowemphasis}
                            >
                              {i.title}
                            </MyText>
                          </MenuItem>
                        );
                      })}
                    </InputField>
                  </FormControl>
                );
              })}

              <Stack paddingTop={'1.5vh'} paddingBottom={'1vh'} alignItems={"center"}>
                <Button
                  data-testid={'closemodal'}
                  variant="contained"
                  color="secondary"
                  onClick={props.closemodal}
                  sx={{
                    width: '12vw',
                    height: '7vh',
                    borderRadius: Theme.spacing(16),
                    textTransform: "none",
                  }}
                  name={<MyText variant={'b2'}>Cancel transfer</MyText>}
                />
              </Stack>
            </Stack>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CancelModal;