import { Story } from "@storybook/react";
import { SelectCountry } from ".";
import React from "react";

export default {
  title: "Organisms/SelectCountry",
  component: SelectCountry,
};

const Template: Story = (args) => <SelectCountry {...args} />;

export const Default = Template.bind({});
Default.args = {};
