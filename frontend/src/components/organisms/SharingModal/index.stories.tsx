
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SharingModal from ".";


export default {
  title: "Organisms/sharinglModal",
  component: SharingModal,
} as Meta;

const Template: StoryFn<typeof SharingModal> = (args) => <SharingModal  />

export const Primary = Template.bind({});

Primary.args = {
};

