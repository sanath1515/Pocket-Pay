import { Meta, StoryFn } from '@storybook/react';
import IconTextRadio from '.';
import Theme from '../../../themes';
import React from 'react';

export default {
  component: IconTextRadio,
  title: 'Molecules/IconTextRadio',
  argTypes: {
    src: { control: 'text' },
    imgheight: { control: 'text' },
    imgweight: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    titleColor: { control: 'color' },
    textColor: { control: 'color' },
    titleVariant: { control: 'select', options: ['h1','b1', 'b2', 'b3', 'c1','linktext'] },
    textVariant: { control: 'select', options: ['h1','b1', 'b2', 'b3', 'c1','linktext'] },
    radiosize: { control: 'select', options: ['small', 'medium'] },
  },
} as Meta;

const Template: StoryFn<typeof IconTextRadio> = (args) => <IconTextRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: './Assets/icons/personalacc.svg',
  title: 'Debit Card',
  text: 'Send from your Visa or Mastercard.',
  titleColor: Theme.palette.text.high,
  textColor: Theme.palette.text.lowemphasis,
  titleVariant: 'b1',
  textVariant: 'c1',
  radiosize: 'medium',
  radioelement: true,
  spacing: '16px' 
};
