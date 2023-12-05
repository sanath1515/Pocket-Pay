import React from 'react';
import { ConformationModal } from '.';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Organisms/ConformationModal',
  component: ConformationModal,
};

const Template: StoryFn<typeof ConformationModal> = (args) => <ConformationModal onClick={undefined} />

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Clicked OK button'),
};
