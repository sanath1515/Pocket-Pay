
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ConfirmBusiness from ".";

export default {
  title: "Organisms/ConfirmBusiness",
  component: ConfirmBusiness,
} as Meta;

const Template: StoryFn<typeof ConfirmBusiness> = (args) => <ConfirmBusiness  />

export const Primary = Template.bind({});

Primary.args = {
};

