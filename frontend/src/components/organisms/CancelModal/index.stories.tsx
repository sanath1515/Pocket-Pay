
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CancelModal from ".";

export default {
  title: "Organisms/CancelModal",
  component: CancelModal,
} as Meta;

const Template: StoryFn<typeof CancelModal> = (args) => <CancelModal  />

export const Primary = Template.bind({});

Primary.args = {
};

