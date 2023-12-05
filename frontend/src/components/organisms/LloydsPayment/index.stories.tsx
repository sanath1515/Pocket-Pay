import { Story } from "@storybook/react";
import { LloydsPayment } from ".";
import React from "react";

export default {
  title: "Organisms/LloydsPayment",
  component: LloydsPayment,
};

const Template: Story = (args) => <LloydsPayment {...args} />;

export const Default = Template.bind({});
Default.args = {};
