import { StoryFn, Meta } from '@storybook/react';
import Amount from '.';


export default {
  title: 'Organisms/Amount',
  component: Amount,
  
  
} as Meta;

const Template: StoryFn = (args) => <Amount {...args} />;

export const Default = Template.bind({});
Default.args = {};
