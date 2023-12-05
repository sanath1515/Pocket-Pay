import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Theme from "../../../themes";
import { NavItem } from ".";

export default {
  title: "Molecules/NavItem",
  component: NavItem,
  argTypes: {
    text: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ['h1','b1','b2','b3'],
      },  
    },
  },
} as Meta;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args}/>

export const Primary = Template.bind({});

Primary.args = {
  src:"./assets/home.svg",
  text:"Home",
  variant:"Caption",
chip:true,
chipname:'New',
color:Theme.palette.text.medium,

};