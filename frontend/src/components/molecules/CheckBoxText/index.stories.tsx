
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CheckBoxText from ".";

export default {
  title: "Molecules/CheckBoxText",
  component: CheckBoxText,
  argTypes: {
    text: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ['h1','b1','b2','b3','c1'],
      },  
    },
  },
} as Meta;

const Template: StoryFn<typeof CheckBoxText> = (args) => <CheckBoxText {...args}/>

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  text: "Remember me",
  variant: "b3",

  checked:true
    
};
Secondary.args={
    text:"Have Account?",
    variant:"b2",
    checked:false
}


