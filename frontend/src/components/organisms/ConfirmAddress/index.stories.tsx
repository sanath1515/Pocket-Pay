
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ConfirmAddress from ".";

export default {
  title: "Organisms/ConfirmAddress",
  component: ConfirmAddress,
} as Meta;

const Template: StoryFn<typeof ConfirmAddress> = (args) => <ConfirmAddress  />

export const Primary = Template.bind({});

Primary.args = {
};

