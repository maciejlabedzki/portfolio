import { fn } from 'storybook/test';

import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    name: 'Lorem',
    theme: 'primary',
    testId: "button-test",
    title: "title",
    radius: 'normal',
  },
};
