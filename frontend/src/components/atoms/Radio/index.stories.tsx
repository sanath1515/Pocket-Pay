import { Meta, StoryFn } from '@storybook/react';
import { CustomRadio } from '.';
import React from 'react';

export default {
    title: 'Atoms/CustomRadio',
    component: CustomRadio,
    argTypes: {
      size: {
        control: {
          type: 'select',
          options: ['small', 'medium'],
        },
      },
      onChange: { action: 'onChange' },
    },
  } as Meta;
  

const Template: StoryFn<typeof CustomRadio> = (args) => <CustomRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
};

