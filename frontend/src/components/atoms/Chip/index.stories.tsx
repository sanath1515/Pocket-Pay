import { StoryFn, Meta } from "@storybook/react";
import { ChipProps, ChipComponent } from ".";
import Theme from "../../../themes";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default {
  title: "Atoms/chip",
  component: ChipComponent,
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["outlined", "filled"],
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta<typeof ChipComponent>

const Template: StoryFn<typeof ChipComponent> = (args: ChipProps) => (
  
  
  <ChipComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  variant: "outlined",
};

