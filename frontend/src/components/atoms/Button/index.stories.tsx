
import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import  Button  from '.';
import Theme from '../../../themes/index'

export default {
 
  title: 'Atoms/Button',
  component: Button,
  argTypes:{
    onClick:{action:'clicked'},
    variant:{options:["contained","outlined","text"],control:{type:'select'}}, 
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args={
  name:"Continue",
  color:"primary",
  variant:"contained",
  disabled:false,
  size:"large",
  bgColor:Theme.palette.primary.main,
  sx:{borderRadius:10,textTransform:'none'},  
};


