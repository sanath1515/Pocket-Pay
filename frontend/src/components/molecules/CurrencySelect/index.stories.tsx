import { Meta, StoryFn } from '@storybook/react';
import CurrencySelect from '.';
import React from 'react';

export default {
  title: 'Molecules/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    handleClick: { action: 'clicked' },
    handleIconClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select Currency',
  countries: [
    { value: 'USD', label: 'United States Dollar', code: 'USD', img: '/Assets/icons/c1.svg' },
    { value: 'GBP', label: 'British Pound Sterling', code: 'GBP', img: '/Assets/icons/c2.svg' },
    { value: 'EUR', label: 'Euro', code: 'EUR', img: '/Assets/icons/c3.svg' },
  ],
  value: '',
  placeholder: 'Select Currency',
  hidden: false,
};
