import { StoryFn, Meta } from '@storybook/react';
import { HomeMain } from '.';
import React from 'react';

export default {
  title: 'Organisms/HomeMain',
  component: HomeMain,
  argTypes:{

  }
  
  
} as Meta;

const Template: StoryFn = (args) => <HomeMain  cancelTransfer={undefined} {...args} />;

export const Default = Template.bind({});
Default.args = { 
};
