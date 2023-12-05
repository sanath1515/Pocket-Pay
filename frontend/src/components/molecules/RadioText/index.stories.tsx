import { Meta, Story } from "@storybook/react";
import RadioText, { RadioTextProps } from ".";
import { Theme } from "../../../themes";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default {
  component: RadioText,
  title: "Molecules/RadioText",
  argTypes:{
    title: { control: 'text' },
  }
} as Meta;

const Template: Story<RadioTextProps> = (args) => <ThemeProvider theme={Theme}><RadioText {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  title:"Title1",
  text:"option1",
  checked: true,
  outerstacksx: { gap: Theme.spacing(7.5), paddingLeft: Theme.spacing(2.5),alignItems: "center"},
  innerstacksx: { gap: Theme.spacing(3), paddingLeft: Theme.spacing(2)},
  titleVariant:Theme.typography.h1,
  textVariant:Theme.typography.b3,
  textColor:Theme.palette.text.medium
};