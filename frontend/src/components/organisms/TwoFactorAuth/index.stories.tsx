import { StoryFn, Meta } from '@storybook/react';
import TwoFactorAuth from '.';
import React from "react";

export default {
  title: 'Organisms/TwoFactorauth',
  component: TwoFactorAuth,
  argTypes:{

  }
  
  
} as Meta;

const Template: StoryFn = (args) => <TwoFactorAuth {...args} />;

export const Default = Template.bind({});
Default.args = {
    country:'./Assets/icons/c2.svg',
    continue:false 
};
