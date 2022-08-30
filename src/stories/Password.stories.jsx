import React from 'react';

import { Password } from './Password';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Password',
  component: Password,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Password {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Password',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Password',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Password',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Password',
};
