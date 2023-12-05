
import React from 'react';

import { StoryFn ,Meta } from '@storybook/react';
import Avatar from '.';


export default {
 
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

export const  PrimaryAvatar = Template.bind({})

PrimaryAvatar.args={
  src: "./assets/Avatar.svg",
  alt:"PocketPayAvatar",
  sx:{width: 56, height: 56}
};

