
import React from 'react';

import { StoryFn ,Meta } from '@storybook/react';
import CheckBox from '.';
import Theme from '../../../themes';

export default {
 
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args:any) => <CheckBox {...args}/>

export const  PrimaryCheckbox = Template.bind({})
export const SecondaryCheckbox = Template.bind({})

PrimaryCheckbox.args={
    color:"primary",
    size:"small",
    checked:true,
    sx:{color:Theme.palette.primary[500] } 
};

SecondaryCheckbox.args={
    color:"primary",
    size:"medium",
    checked:false,
    sx:{color:Theme.palette.primary[500]} 
}
