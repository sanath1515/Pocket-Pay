import { Stack } from "@mui/material";
import React from "react";
import Theme from "../../../themes";
import MyText from "../../atoms/Typography";
import IconTextRadio from "../../molecules/IconTextRadio";

interface AccountTypeProps {
  data?: any;
  Title?: string;
  Info?: string;
  selectAccount?: any;
}

const AccountType = (props: AccountTypeProps) => {

  return (
    <Stack data-testid="account-type" width="32.5vw" gap={Theme.spacing(8)}>
      <Stack gap={Theme.spacing(3)}>
        <MyText variant={"h1"} color={Theme.palette.text.high}>
          {props.Title}
        </MyText>
        <MyText variant={"b3"} color={Theme.palette.text.medium}>
          {props.Info}
        </MyText>
      </Stack>
      <Stack gap={Theme.spacing(5)}>
        {props.data.map((account: any,index: number) => {
          const key="key"+String(index)
          return (
            <IconTextRadio
              css={index===0}
              cursor={index===1}
              key={key} 
              src={account.src}
              imgheight="15%"
              title={account.title}
              titleVariant={"b2"}
              titleColor={Theme.palette.text.high}
              text={account.text}
              textVariant={"c1"}
              textColor={Theme.palette.text.lowemphasis}
              stackHeight="9.64vh"
              spacing={Theme.spacing(4.915)}
              onClick={() => {
                props.selectAccount(account);
              }}
              border={Theme.palette.borderColors.prime}
              stacksx={{
                cursor: "pointer",
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
export default AccountType;
