import { Meta, StoryFn } from "@storybook/react";
import { SendToSomeone } from ".";
import React from "react";

export default {
  title: "Organisms/SendToSomeone",
  component: SendToSomeone,
} as Meta;

export const Default: StoryFn = () => <SendToSomeone />;
Default.storyName = "Default";

export const WithRecipientDetails: StoryFn = () => (
  <SendToSomeone />
);
WithRecipientDetails.storyName = "With Recipient Details";

