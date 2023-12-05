import React from 'react';
import {  Stack } from '@mui/material';
import { CustomRadio } from '../../atoms/Radio';
import MyText from '../../atoms/Typography';

export interface RadioTextProps {
  title: string;
  titleVariant?:any;
  titleColor?:any;
  text?:string;
  textVariant?:any;
  textColor?:any;
  value?: string;
  checked?: boolean;
  size: "small" | "medium";
  onChange?: any;
  stackwidth?: any;
  stackheight?: any;
  outerstacksx?:any;
  testid?:any
  innerstacksx?:any;
  label?: any;
}

const RadioText = (props: RadioTextProps) => {
  return (
    <Stack
      direction={"row"}
      data-testid='radio-text'
      sx={props.outerstacksx}
      width={props.stackwidth}
      height={props.stackheight}
    >
      <Stack>
      <CustomRadio
        label={props.label}
        data-testid={props.testid}
        value={props.value}
        checked={props.checked}
        onClick={props.onChange}
        size={props.size}
      />
      </Stack>
      <Stack sx={props.innerstacksx}>
        <MyText variant={props.titleVariant} color={props.titleColor}>
          {props.title}
        </MyText>
        <MyText variant={props.textVariant} color={props.textColor}>{props.text}</MyText>
      </Stack>
    </Stack>
  );
};

export default RadioText;
