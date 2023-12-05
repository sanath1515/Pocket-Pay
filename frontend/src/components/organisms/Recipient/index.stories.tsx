import { Meta, StoryFn } from "@storybook/react";
import { Recipient } from ".";
import { ThemeProvider } from "@mui/material";
import Theme from "../../../themes";
import React from "react";

export default {
  component: Recipient,
  title: "Organisms/Recipient",
} as Meta;

const Template: StoryFn = (args) => (
  <ThemeProvider theme={Theme}>
    <Recipient {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
