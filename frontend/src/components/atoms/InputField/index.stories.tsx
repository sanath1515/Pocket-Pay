import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { InputField } from ".";
import { MenuItem } from "@mui/material";
import { Clear, Search } from "@mui/icons-material";

export default {
  title: "Atoms/InputField",
  component: InputField,
  argTypes: {
    variant: {
      options: ["standard", "outlined", "filled"],
      control: { type: "select" },
    },
    label: {
      control: { type: "text" },
    },

    helperText: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: "text",
    },

    select: {
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    onChange:{
      control:{
        action:"clicked"
      }
    }
  },
} as Meta<typeof InputField>;

const temp: StoryFn<typeof InputField> = (args) => <InputField {...args} />;

export const Primary = temp.bind({});
Primary.args = {
  variant: "outlined",
  placeholder: "Placeholder",
  maxLength:5,
  onChange:()=>{console.log("onChange")}

};

export const SelectInput = temp.bind({});
SelectInput.args = {
  variant: "outlined",
  label: "Select Input",
  select: true,
  children: (
      <><MenuItem value="option1">Option 1</MenuItem><MenuItem value="option2">Option 2</MenuItem><MenuItem value="option3">Option 3</MenuItem></>
  ),
};


export const WithIcons = temp.bind({}) 
WithIcons.args = {
    variant:"outlined",
    label: "Input with Icons",
    placeholder: "Type something",
    starticon: <Search />,
    endicon: <Clear />,
    maxLength:5
};
