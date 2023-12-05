import { ThemeProvider } from "@mui/system";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { SignUp } from ".";
import Theme from "../../../themes";

export default {
  title: "Organisms/SignUp",
  component: SignUp,
} as Meta;

const Template: StoryFn<typeof SignUp> = (args) =><ThemeProvider theme={Theme}><SignUp {...args} /></ThemeProvider> ;

export const Default = Template.bind({});
Default.args = {};
