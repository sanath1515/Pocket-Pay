import React from "react";
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonImage, { ButtonImageProps } from '.';
import { Theme } from "../../../themes";

export default {
  title: 'Molecules/ButtonImage',
  component: ButtonImage,
  argTypes:{
    src: { control: 'file' },
    alt: { control: 'text' },
    onClick: { action: action('onClick') },
  }
} as Meta;

const Template: Story<ButtonImageProps> = (args) => (
  <ButtonImage {...args}  />
);

export const Default = Template.bind({});
Default.args = {
  src: './Assets/icons/dropdown.svg',
  buttonText: 'General',
  variant: 'contained',
  sx:{backgroundColor:Theme.palette.text.lowemphasis}
};

