import { Story } from "@storybook/react";
import { ConfirmCardPurchase } from ".";
import React from "react";

export default {
  title: "Organisms/ConfirmPurchase",
  component: ConfirmCardPurchase,
};

const Template: Story = (args) => <ConfirmCardPurchase {...args} />;

export const Default = Template.bind({});
Default.args = {};
