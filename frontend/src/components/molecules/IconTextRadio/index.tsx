import { Stack } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";
import Typography from "../../atoms/Typography";
import { CustomRadio } from "../../atoms/Radio";
import Theme from "../../../themes";

interface IconTextRadioProps {
  src: string;
  imgheight?: string;
  imgwidth?: string;
  title?: string;
  text?: string;
  titleColor?: string;
  textColor?: string;
  titleVariant?: any;
  textVariant?: any;
  radiosize?: "small" | "medium";
  radioelement?: boolean;
  radiochange?:any;
  checked?: any;
  spacing?: any;
  stackHeight?: any;  
  onClick?: any;
  singleText?:boolean
  multiText?:any
  radioLeft?:any;
  stacksx?:any;
  radiosx?:any;
  border?:any
  cursor?: any;
  value?: any
  onChange?: any;
  radioId?:any
  css?:any
}

const IconTextRadio = (props: IconTextRadioProps) => {
  return (
    <Stack
      data-testid='icon-text-radio'
      paddingLeft={Theme.spacing(5.7)}
      direction={"row"}
      spacing={props.spacing}
      alignItems={"center"}
      border={props.border}
      width="26.87vw"
      height={props.stackHeight}
      onClick={props.onClick}
      borderRadius={Theme.spacing(2)}
      sx={{
        
        "&:hover": {
          backgroundColor: props.css?"":Theme.palette.text.low,
          cursor: props.cursor? 'pointer': ''
        },
      }}
    >
      <Stack direction={"row"} width={Theme.spacing(130)} justifyContent={"space-between"} alignItems={"center"}>
        <Stack
          direction={"row"}
          spacing={Theme.spacing(4)}
        >
          <Image
            src={props.src}
            height={props.imgheight?props.imgheight:Theme.spacing(10)}
            width={props.imgheight?'':Theme.spacing(10)}
          />
          <Stack>
            <Typography variant={props.titleVariant} color={props.titleColor}>
              {props.title}
            </Typography>
            {!props.singleText && (
              <Typography variant={props.textVariant} color={props.textColor}>
                {props.text}
              </Typography>
            )}
            {props.singleText && props.multiText}
          </Stack>
        </Stack>
        {props.radioelement && (
          <Stack><CustomRadio size={props.radiosize}
          data-testid={props.radioId}
          checked={props.checked}
          onChange={props.radiochange}
          value={props.value} /></Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default IconTextRadio;
