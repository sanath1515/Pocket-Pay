import { Story } from "@storybook/react";
import { PaymentOptions } from ".";
import React from "react";

export default {
  title: "Organisms/PaymentOptions",
  component: PaymentOptions,
};

const Template: Story = (args) => <PaymentOptions {...args} />;

export const Default = Template.bind({});
Default.args = {};
