
import { StoryFn, Meta } from "@storybook/react";
import TextDividerIcon from ".";
import Theme from "../../../themes";
import React from "react";

export default {
  title: "Molecules/TextDividerIcon",
  component: TextDividerIcon,
} as Meta;

const Template: StoryFn<typeof TextDividerIcon> = (args) => <TextDividerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  text1: "Low cost transfer fee:",
  color:Theme.palette.text.lowemphasis,
  text2: "From 3.69GBP",
  color1: Theme.palette.text.medium,
  src: "./assets/Info.svg",
  divsx:{width: Theme.spacing(49)},
  imgwidth:Theme.spacing(5),
  imgheight:Theme.spacing(5)
};
