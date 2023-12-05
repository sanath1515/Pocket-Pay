import { Story } from "@storybook/react";
import { SetPassword } from "./index";
import React from "react";

export default {
  title: "Organisms/SetPassword",
  component: SetPassword,
};

const Template: Story = (args) => <SetPassword {...args} />;

export const Default = Template.bind({});
Default.args = {};
