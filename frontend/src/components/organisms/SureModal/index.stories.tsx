
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SureModal from ".";

export default {
  title: "Organisms/SureModal",
  component: SureModal,
} as Meta;

const Template: StoryFn<typeof SureModal> = (args) => <SureModal  />

export const Primary = Template.bind({});

Primary.args = {
};

