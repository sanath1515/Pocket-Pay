import { Meta, Story, StoryFn } from '@storybook/react';
import { BusinessActivity } from '.';
import React from 'react';

export default {
  component: BusinessActivity,
  title: 'Organisms/BusinessActivity',
} as Meta;

const Template: StoryFn<typeof BusinessActivity> = (args:any) => <BusinessActivity {...args} />;

export const Default = Template.bind({});
Default.args = {};

