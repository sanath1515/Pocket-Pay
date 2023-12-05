import React from "react";
import { Meta,  StoryFn } from "@storybook/react";
import { SelectingBank } from ".";


export default {
  component: SelectingBank,
  title: "Components/SelectingBank",
} as Meta;

const Template: StoryFn = (args) => <SelectingBank {...args} />;

export const Default = Template.bind({});
Default.args = {};
