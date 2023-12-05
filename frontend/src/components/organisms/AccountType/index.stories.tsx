import { StoryFn, Meta } from '@storybook/react';
import AccountType from '.';
import React from 'react';
import { sendingMoney,  sendingMoneyTitle } from '../../../utils/constants';
export default {
  title: 'Organisms/AccountType',
  component: AccountType,
  
  
} as Meta;

const Template: StoryFn = (args) => <AccountType {...args} />;

export const Default = Template.bind({});
Default.args = {
  data:sendingMoney, Title:sendingMoneyTitle, 
};
