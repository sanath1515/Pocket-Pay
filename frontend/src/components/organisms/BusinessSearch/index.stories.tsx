
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import BusinessSearch from ".";

export default {
  title: "Organisms/BusinessSearch",
  component: BusinessSearch,
} as Meta;

const Template: StoryFn<typeof BusinessSearch> = (args) => <BusinessSearch  />

export const Primary = Template.bind({});

Primary.args = {
};

