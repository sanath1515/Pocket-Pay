import { Stack } from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import CurrencySelect from "../../molecules/CurrencySelect";
import TextDividerIcon from "../../molecules/TextDividerIcon";
import { ConformationModal } from "../ConformationModal";
import { currencies } from "../../../utils/constants";

interface AmountProps {
  currency?: any;
  setCurrency?: any;
}

const Amount = (props: AmountProps) => {
  const [hidden, setHidden] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [recip, setRecip] = useState("");

  const handleInputChange = (event: {
    target: { name: string; value: any };
  }) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setValue(numericValue);
    if (event.target.value !== "") {
      const val = parseFloat(event.target.value) * 1.1468;
      const ans = String(val as unknown);
      if (ans !== "NaN") {
        setRecip(ans);
        props.setCurrency({
          ...props.currency,
          recieve: ans + " EUR",
          send: event.target.value + " GBP",
        });
      }
    } else {
      setRecip("");
    }
  };
  const handleClick = async (event: any, hidden: any, setHidden: any) => {
    setHidden(!hidden);
  };
  const handleIconClick = (
    isHidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHidden(!isHidden);
  };
  const modalOpen = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Stack
        data-testid="amount"
        direction={"column"}
        spacing={Theme.spacing(5)}
        height={"65vh"}
        width="30vw"
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack>
          <MyText variant={"h1"} color={Theme.palette.text.high}>
            How much would you like to transfer?
          </MyText>
        </Stack>
        <CurrencySelect
          datatestid={"send"}
          name="send"
          placeholder={"You Send"}
          countries={currencies}
          onChange={handleInputChange}
          val={value}
          value={true}
          handleIconClick={() => handleIconClick(hidden, setHidden)}
          handleClick={(e: any) => handleClick(e, hidden, setHidden)}
          hidden={hidden}
        />
        {!hidden && (
          <>
            <CurrencySelect
              name="recieve"
              val={recip}
              placeholder={"Receipients gets"}
              countries={currencies}
              hidden={false}
              onChange={null}
            />
            <TextDividerIcon
              text1={"Low cost transfer fee:"}
              text2={"From 3.69GBP"}
              src={"./Assets/icons/info.svg"}
              color1={Theme.palette.text.medium}
              color={Theme.palette.text.lowemphasis}
              divsx={{ width: "10.3vw" }}
            ></TextDividerIcon>
            <TextDividerIcon
              cursor={true}
              id="modal-rate"
              text1={"Guaranteed rate (24 hrs):"}
              text2={"1.20048"}
              src={"./Assets/icons/crossarrow.svg"}
              onClick={modalOpen}
              color1={Theme.palette.primary[300]}
              color={Theme.palette.text.lowemphasis}
              divsx={{ width: "11.5vw" }}
            ></TextDividerIcon>
            <TextDividerIcon
              text1={"Total amount:"}
              text2={"996.31 GBP"}
              src={"./Assets/icons/info.svg"}
              color1={Theme.palette.text.medium}
              color={Theme.palette.text.lowemphasis}
              divsx={{ width: "14.6vw" }}
            ></TextDividerIcon>
          </>
        )}
      </Stack>
      {show && <ConformationModal handleClose={handleClose} />}
    </>
  );
};

export default Amount;
