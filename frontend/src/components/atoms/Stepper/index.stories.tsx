import React from "react";
import { StoryFn, Meta } from '@storybook/react';
import CustomStepper from ".";

export default {
  title: 'Atoms/CustomStepper',
  component: CustomStepper,
} as Meta;

const Template: StoryFn<typeof CustomStepper> = (args) => <CustomStepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  alternativeLabel: false,
  activeStep: 0,
};

