import { StoryFn, Meta } from '@storybook/react';
import ReviewDetails from '.';
import React from "react";
export default {
  title: 'Organisms/Review',
  component: ReviewDetails,
  argTypes:{
  }
  
} as Meta;

const Template: StoryFn = (args) => <ReviewDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    
};
