import { Divider, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import MyText from "../../atoms/Typography";
import Image from "../../atoms/Image";
import Theme from "../../../themes";

interface TextDividerIconProps {
  text1: string;
  text2: string;
  src: string;
  color1?: any;
  color?: any;
  divsx: any;
  imgwidth?: any;
  imgheight?: any;
  onClick?: any;
  id?: string;
  cursor?: boolean;
}

const TextDividerIcon = (props: TextDividerIconProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Stack spacing={Theme.spacing(3)} direction={"row"} alignItems={"center"}>
        <MyText variant={"b3"} color={props.color}>
          {props.text1}
        </MyText>
        <Divider sx={props.divsx} />
        <Stack
          direction={"row"}
          spacing={Theme.spacing(1)}
          alignItems={"center"}
        >
          <MyText variant={"b3"} color={props.color1}>
            {props.text2}
          </MyText>
          <Stack sx={{ cursor: props.cursor ? "pointer" : "unset" }}>
            <Image
              data-testid={props.id}
              src={props.src}
              width={props.imgwidth}
              height={props.imgheight}
              onClick={props.onClick}
            />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default TextDividerIcon;
