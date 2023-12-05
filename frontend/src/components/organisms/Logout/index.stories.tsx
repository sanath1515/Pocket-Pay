import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Logout from ".";

export default {
  component: Logout,
  title: "Organisms/Logout",
} as Meta;

const Template: StoryFn<typeof Logout> = (args) => {
  const [logout,openLogout]= useState(true)
  return <Logout logout={logout} openLogout={()=>{openLogout(false)}} />;
};

export const Default = Template.bind({});