import { Verification } from '.';
import { Meta, Story } from "@storybook/react";
import React from 'react';

export default {
  title: 'Organisms/Verification',
  component: Verification,
}as Meta;

const Template:Story = (args) => <Verification />;

export const Default = Template.bind({});
Default.args = {};
