import { FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import { SendToSomeoneTitle, RecipientDetails } from "../../../utils/constants";
import { InputField } from "../../atoms/InputField";
import CheckBoxText from "../../molecules/CheckBoxText";
import Image from "../../atoms/Image";

interface SendToSomeOneProps {
  recipientData?: any;
  setRecipientData?: any;
}

const DropdownIcon = () => (
  <Image src="./Assets/icons/dropdown.svg" alt="dropdown-svg" />
);

export const SendToSomeone = (props: SendToSomeOneProps) => {
  const AccountType = [
    {
      value: "Checking",
      label: "Checking",
    },
    {
      value: "Savings",
      label: "Savings",
    },
  ];
  const [labelValues, setLabelValues] = useState(
    Array.from({ length: 4 }, () => false)
  );
  const [email, setEmail] = useState(true);
  const [account, setAccount] = useState("");
  const [accno, setAccno] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [gmail, setGmail] = useState(false);

  const handleAccountChange = (e: any) => {
    setAccount(e.target.value);
    props.setRecipientData({
      ...props.recipientData,
      [e.target.name]: e.target.value,
    });
  };

  const checkboxChange = () => {
    console.log(".checked");
  };
  const isValidgmail = (gm: string) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gm)) return true;
    else return false;
  };
  const handleChange = (e: any) => {
    if (e.target.value === "") {
      setEmail(true);
    } else {
      setEmail(false);
      if (isValidgmail(e.target.value)) {
        setGmail(true);
      } else {
        setGmail(false);
        props.setRecipientData({
          ...props.recipientData,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const handleInputChange = (i: any, e: any) => {
    const newValues = [...labelValues];
    if (e.target.value === "") newValues[i] = false;
    else newValues[i] = true;
    setLabelValues(newValues);
    if (i === 0) {
      if (e.target.value.match(/^\d+$/) && e.target.value.length <= 10) {
        setAccno(e.target.value);

        props.setRecipientData({
          ...props.recipientData,
          [e.target.name]: e.target.value,
        });
      }
      if (e.target.value === "") setAccno(e.target.value);
    } else if (i === 1) {
      setFirstname(e.target.value);
      props.setRecipientData({
        ...props.recipientData,
        [e.target.name]: e.target.value,
      });
    } else if (i === 2) {
      setLastname(e.target.value);
      props.setRecipientData({
        ...props.recipientData,
        [e.target.name]: e.target.value,
      });
    } else {
      if (e.target.value.length <= 10) {
        setIfsc(e.target.value);
        props.setRecipientData({
          ...props.recipientData,
          [e.target.name]: e.target.value,
        });
      }
    }
  };
  const fieldMappings = [
    { id: "accno", name: "accno", val: accno },
    { id: "firstname", name: "firstname", val: firstname },
    { id: "lastname", name: "lastname", val: lastname },
    { id: "IFSC", name: "IFSC", val: ifsc },
  ];

  return (
    <Stack
      data-testid="send-to-someone"
      width="31.4vw"
      height={"65vh"}
      gap={"2.5vh"}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <MyText variant={"h1"} color={Theme.palette.text.high}>
        {SendToSomeoneTitle}
      </MyText>
      <Stack>
        <FormControl>
          <InputLabel sx={{ py: "2vh" }}>
            {email ? (
              <MyText
                paddingLeft={Theme.spacing(2.5)}
                variant={"b2"}
                color={Theme.palette.text.lowemphasis}
              >
                Email
              </MyText>
            ) : (
              ""
            )}
          </InputLabel>

          <InputField
            name={"email"}
            id={"email"}
            error={gmail}
            variant="outlined"
            onChange={handleChange}
          />
          <CheckBoxText
            checked={true}
            variant={"b3"}
            text={"I know their bank details"}
            onChange={checkboxChange}
          />
        </FormControl>
      </Stack>
      <Stack>
        <MyText variant={"b3"} color={Theme.palette.text.high}>
          Receipient details
        </MyText>

        {RecipientDetails.map((recipient, idx) => {
          const { id, name, val } = fieldMappings[idx];
          return (
            <FormControl key={recipient}>
              <InputLabel sx={{ py: "2.2vh" }}>
                <MyText
                  variant={"b2"}
                  paddingLeft={Theme.spacing(2.5)}
                  color={Theme.palette.text.lowemphasis}
                >
                  {labelValues[idx] ? "" : recipient}
                </MyText>
              </InputLabel>

              <InputField
                id={id}
                name={name}
                data-testid={recipient}
                label={labelValues[idx] ? recipient : ""}
                variant="outlined"
                value={val}
                onChange={(e: any) => {
                  handleInputChange(idx, e);
                }}
              />
            </FormControl>
          );
        })}
        <FormControl>
          <InputLabel sx={{ paddingX: "0.5vw", py: "2.2vh" }}>
            <MyText variant={"b2"} color={Theme.palette.text.lowemphasis}>
              {account === "" ? "Select Account Type" : ""}
            </MyText>
          </InputLabel>

          <InputField
            id={"sendtosomeone"}
            name="acctype"
            data-testId={"account-type"}
            select
            variant="outlined"
            value={account}
            label={account === "" ? "" : "Account Type"}
            onChange={handleAccountChange}
            SelectProps={{
              IconComponent: DropdownIcon,
            }}
          >
            {AccountType.map((account) => {
              return (
                <MenuItem
                  key={account.value}
                  value={account.value}
                  sx={{ height: Theme.spacing(14) }}
                  data-testId={"accounts"}
                >
                  {account.label}
                </MenuItem>
              );
            })}
          </InputField>
        </FormControl>
      </Stack>
    </Stack>
  );
};
