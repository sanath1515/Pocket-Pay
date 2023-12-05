import { Story } from "@storybook/react";
import { LloydsPaymentDetails } from ".";
import React from "react";

export default {
  title: "Organisms/LloydsPaymentDetails",
  component: LloydsPaymentDetails,
};

const Template: Story = (args) => <LloydsPaymentDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
