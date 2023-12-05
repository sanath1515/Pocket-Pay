import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import Theme from "../../../themes";
import PaymentDetails from ".";
import React from "react";

export default {
  component: PaymentDetails,
  title: "Organisms/PaymentDetails",
} as Meta;

const Template: StoryFn = (args) => (
  <ThemeProvider theme={Theme}>
    <PaymentDetails {...args} />;
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
