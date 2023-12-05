
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CardType from ".";

export default {
  title: "Organisms/CardType",
  component: CardType,
} as Meta;

const Template: StoryFn<typeof CardType> = (args) => <CardType  />

export const Primary = Template.bind({});

Primary.args = {
};

