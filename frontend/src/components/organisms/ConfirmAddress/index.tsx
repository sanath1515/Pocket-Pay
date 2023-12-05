import React, { useState } from "react";
import { Theme } from "../../../themes";
import MyText from "../../atoms/Typography";
import Stack from "@mui/material/Stack";
import Button from "../../atoms/Button";
import { InputField } from "../../atoms/InputField";
import Modal from "@mui/material/Modal";
import {
  add,
  add2,
  addAdd,
  cancel,
  confirm,
  confirmAdd,
  confirmHeading,
  edit,
  save,
  tradAdd,
} from "../../../utils/constants";
import RadioText from "../../molecules/RadioText";
import { useSelector } from "react-redux";

interface ConfirmAddressProps {
  confirmClick?: any;
  tradingAddress?: any;
  setTradingAddress?: any;
}

const ConfirmAddress = (props: ConfirmAddressProps) => {

  const [address2,setAddress2]=useState(false)
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectvalue, setSelectedvalue] = useState("");
  const business = useSelector((state: any) => state.business);

  const handleChange = (event: any) => {
    setSelectedvalue(event.target.value);
  };
  const handleClose = () => setOpen(false);

  const changeAddress = (e: any) => {
    if (e.target.name === "add1") {
      console.log("trad add", props.tradingAddress);
      props.setTradingAddress({
        ...props.tradingAddress,
        "address":e.target.value
      })
    } else if (e.target.name === "add2") {
      props.setTradingAddress({
        ...props.tradingAddress,
        "address1":e.target.value
      })
    }
  };
  console.log(props.tradingAddress)
  if (props.tradingAddress.length===0) {
    props.setTradingAddress({
      ...props.tradingAddress,
      "address":business.businessAddress,
      "address1":add2,
      
    })
    console.log("aaa")
  }

  return (
    <>
      <Stack
        width={"35vw"}
        height={"65vh"}
        direction="column"
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <MyText
          variant={"h1"}
          color={Theme.palette.text.high}
        >
          {confirmHeading}
        </MyText>
        <MyText
          variant={"b3"}
          color={Theme.palette.text.medium}
          paddingY={'2vh'}
          width={"27.5vw"}
        >
          {confirmAdd}
        </MyText>

        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingY={'2vh'}
          width={"27.5vw"}
        >
          <MyText variant={"b2"} color={Theme.palette.text.lowemphasis}>
            {tradAdd}
          </MyText>
          {!view && (
            <MyText
              data-testid="edit-add"
              variant={"linkText"}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              color="primary"
              onClick={() => {
                if (selectvalue==="option1") {
                  setView(true);
                }else if (selectvalue==="option2") {
                  setView(true);
                  setAddress2(true)
                }
              }}
            >
              {edit}
            </MyText>
          )}
        </Stack>
        {view && (
          <Stack width="29.9vw" direction="column" spacing={Theme.spacing(8)}>
            {!address2 && <InputField
              id={'add-1'}
              variant="outlined"
              label="Trading address 1"
              value={props.tradingAddress.address}
              name="add1"
              onChange={changeAddress}
              type="text"
              multiline
              rows={2}
              sx={{
                paddingLeft: '0.1vw',
                paddingBottom: Theme.spacing(2),
              }}
            />}
            {address2 && <InputField
              id={'add-2'}
              variant="outlined"
              label="Trading address 2"
              value={props.tradingAddress.address1}
              name="add2"
              onChange={changeAddress}
              type="text"
              multiline
              rows={2}
              sx={{
                paddingLeft: '0.1vw',
                paddingBottom: Theme.spacing(2),
              }}
            />}
            <Stack
              alignItems="center"
              paddingTop={Theme.spacing(4)}
              spacing={Theme.spacing(5)}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: Theme.spacing(14),
                  width: "11.2vw",
                  height: "5.9vh",
                  textTransform: "none",
                }}
                name={cancel}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: Theme.spacing(14),
                  width: "11.2vw",
                  height: "5.9vh",
                  textTransform: "none",
                }}
                name={save}
                onClick={() => {
                  setView(false);
                  setAddress2(false)
                }}
              />
            </Stack>
          </Stack>
        )}
        {!view && (
          <Stack direction={"column"} gap={'4vh'}>
            <RadioText
              testid={"radio-business"}
              stackheight={'10vh'}
              stackwidth={"27vw"}
              title={"Address 1"}
              text={props.tradingAddress.address}
              size={"small"}
              titleColor={Theme.palette.text.medium}
              textColor={Theme.palette.text.high}
              innerstacksx={{
                gap: Theme.spacing(3),
              }}
              titleVariant={'b2'}
              textVariant={'b2'}
              outerstacksx={{
                gap: "1vw",
                alignItems: "center",
                paddingX: "0.5vw",
                paddingY: "1vh",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: Theme.palette.structuralColors.blue,
                },
              }}
              value="option1"
              checked={selectvalue === "option1"}
              onChange={handleChange}
            />
            {show && (
              <RadioText
                stackheight={"10vh"}
                stackwidth={"27vw"}
                title={"Address 2"}
                text={props.tradingAddress.address1}
                size={"small"}
                titleColor={Theme.palette.text.medium}
                titleVariant={'b2'}
                textVariant={'b2'}
                textColor={Theme.palette.text.high}
                innerstacksx={{
                  gap: Theme.spacing(3),
                }}
                outerstacksx={{
                  gap: "1vw",
                  alignItems: "center",
                  paddingX: "0.45vw",
                  paddingY: "1vh",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Theme.palette.structuralColors.blue,
                  },
                }}
                value="option2"
                checked={selectvalue === "option2"}
                onChange={handleChange}
              ></RadioText>
            )}
            <Stack
              width={"27.5vw"}
              alignItems="center"
              spacing={Theme.spacing(5)}
              paddingLeft={'1.25vw'}
              paddingTop={Theme.spacing(10)}
              flexShrink={2}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  if (!show) {
                    setOpen(true);
                  }
                  console.log(props.tradingAddress);
                }}
                sx={{
                  borderRadius: "56px",
                  width: "11vw",
                  height: "6vh",
                  textTransform: "none",
                }}
                name={<MyText variant={'b2'}>{addAdd}</MyText>}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "56px",
                  width: "11vw",
                  height: "6vh",
                  textTransform: "none",
                }}
                name={confirm}
                onClick={props.confirmClick}
              />
            </Stack>
          </Stack>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{ left: "34%", top: "29%" }}
        >
          <Stack
            width={"28vw"}
            height={"auto"}
            borderRadius={Theme.spacing(4)}
            paddingX={'1.3vw'}
            paddingY={'3vh'}
            bgcolor={Theme.palette.structuralColors.white}
            direction="column"
            gap={'3vh'}
          >
            <MyText variant={"b1"}>
              {addAdd}
            </MyText>
            <InputField
              variant="outlined"
              name="add2"
              onChange={changeAddress}
              label="Trading address 2"
              value={props.tradingAddress.address1}
              multiline
              rows={2}
              
            ></InputField>
            <Stack alignItems="center">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: Theme.spacing(14),
                  width: "7vw",
                  height: "6.5vh",
                }}
                name={<MyText variant={'b2'}>{add}</MyText>}
                onClick={() => {
                  handleClose();
                  setShow(true);
                }}
              />
            </Stack>
          </Stack>
        </Modal>
      </Stack>
    </>
  );
};

export default ConfirmAddress;
