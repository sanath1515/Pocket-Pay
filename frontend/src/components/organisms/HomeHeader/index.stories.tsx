import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { HomeHeader } from '.';

export default {
  title: 'Organisms/HomeHeader',
  component: HomeHeader,
} as Meta;

const Template: StoryFn< typeof HomeHeader> = (args:any) => <HomeHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
