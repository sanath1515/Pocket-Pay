
import React from "react";
import TypographyComponent  from ".";
import {Meta, StoryFn} from '@storybook/react';

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
  argTypes:{
    label:{
        control:'text',
    },
    variant:{
        control:'select',
        options:['h1','b1','b2','b3','c1']
        
    },
    color:{
      control:'select',
      options:['primary','secondary']
      
  }

  }
} as Meta;


const Template: StoryFn<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Typography</TypographyComponent>
);

export const Primary = Template.bind({})

Primary.args = {
  variant: 'h1',
  color:"primary"
}

