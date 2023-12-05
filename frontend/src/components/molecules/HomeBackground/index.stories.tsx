import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import HomeBackground from ".";
import { Theme } from "../../../themes";

export default {
  title: "Molecules/HomeBackground",
  component: HomeBackground,
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
    height: { control: "text" },
    width: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof HomeBackground> = (args) => (
  <HomeBackground {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: "This is where you’ll see your activity and transactions. Choose how you’d like to get started.",
  variant: "b1",
  src: "./assets/Illustration.svg",
  height: Theme.spacing(45.75),
  width: Theme.spacing(44.5),
  textsx: {
    color: Theme.palette.text.medium,
    width: Theme.spacing(115.5),
    height: Theme.spacing(16),
    textAlign: "center",
  },
};
