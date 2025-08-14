import { fn } from 'storybook/test';
import ButtonList from './ButtonList';
import { ButtonListArgTypes } from './useButtonList';

export default {
  title: 'Components/ButtonList',
  component: ButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    ...ButtonListArgTypes,
  },
};

export const Primary = {
  args: {
    data: [
      { value: 'Primary', name: 'Primary' },
      { value: 'Secondary', name: 'Secondary' },
    ],
    theme: 'transparent',
  },
};
