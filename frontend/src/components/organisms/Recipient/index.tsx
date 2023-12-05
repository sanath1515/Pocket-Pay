import { Stack } from "@mui/material";
import React from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";
import IconText from "../../molecules/IconTextRadio";
import {
  RecipientOptionTitle,
  RecipientOptions,
} from "../../../utils/constants";

interface Recipientprops{
  onClick?: any
}
export const Recipient = (props: Recipientprops) => {
  return (
    <Stack
      data-testid="recipient"
      spacing={Theme.spacing(5)}
    >
      <MyText
        variant={'h1'}
        color={Theme.palette.text.high}
        sx={{
          paddingBottom: Theme.spacing(3),
        }}
      >
        {RecipientOptionTitle}
      </MyText>

      {RecipientOptions.map((option, index) => (
        <IconText
          stackHeight={Theme.spacing(15)}
          key={option}
          src={`./Assets/icons/recipient${index}.svg`}
          imgheight="15%"
          text={option}
          textVariant={'b2'}
          textColor={Theme.palette.text.high}
          spacing={Theme.spacing(4.2)}
          onClick={props.onClick}
          border={Theme.palette.borderColors.prime}
          cursor={"pointer"}
        />
      ))}
    </Stack>
  )
}
