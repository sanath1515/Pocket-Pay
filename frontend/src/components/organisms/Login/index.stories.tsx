import { Meta, Story } from "@storybook/react";
import { Login, LoginProps } from ".";
import { ThemeProvider } from "@mui/material";
import Theme from "../../../themes";
import React from "react";

export default {
  title: "Organisms/Login",
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <ThemeProvider theme={Theme}><Login {...args}/></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
