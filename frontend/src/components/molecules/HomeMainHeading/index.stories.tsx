import { StoryFn, Meta } from '@storybook/react';
import { HomeMainHeading } from '.';
import React from 'react';

export default {
  title: 'Molecules/HomeMainHeading',
  component: HomeMainHeading,
  argTypes:{

  }
  
  
} as Meta;

const Template: StoryFn = (args) => <HomeMainHeading {...args} />;

export const Default = Template.bind({});
Default.args = { 
};
