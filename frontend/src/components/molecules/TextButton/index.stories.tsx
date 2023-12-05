import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { TextButton } from ".";
import Theme from "../../../themes";

export default {
  title: "Molecules/TextButton",
  component: TextButton,
  argTypes: {
    onClick:{action:'clicked'},
    text: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["outlined", "contained", "text"],
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof TextButton> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Already have an account?",
  buttonName:"Log in",
  variant: "text",
  color: Theme.palette.text.lowemphasis
   
};