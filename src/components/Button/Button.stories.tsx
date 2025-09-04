import { UserIcon } from '@heroicons/react/24/solid';
import { fn } from 'storybook/test';
import Button from './Button';
import { ButtonArgTypes } from './useButton';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // // 👇 All Button stories expect a label arg
    // label: {
    //   control: 'text',
    //   description: 'Overwritten description',
    // },
    // /** Lorem ipsum */
    // backgroundColor: "#cccccc",
    onClick: fn(),
  },
  argTypes: {
    ...ButtonArgTypes,
    //   propertyA: {
    //     options: ['Item One', 'Item Two', 'Item Three'],
    //     control: { type: 'select' },
    //   },
    /** Lorem ipsum 2 */
    // backgroundColor: { control: 'color' },
    // backgroundColor2: { control: 'color', table: { category:"Lorem"} },
  },
};

export const Primary = {
  args: {
    name: 'Primary',
    theme: 'primary',
    title: 'title',
    // radius: 'normal',
    // type: 'button',
    // hover: 'none',
    // border: 'none',
    // space: 'small',
    // margin: 'small',
    // height: 'fit',
    // width: 'fit',
    // disabled: false,
    // isSelected: false,
  },
};

export const Secondary = {
  args: {
    name: 'Secondary',
    theme: 'secondary',
    title: 'title',
    // radius: 'normal',
    // space: 'normal',
    // margin: 'normal',
    // disabled: false,
  },
};

export const WithIcon = {
  args: {
    icon: <UserIcon className="w-4 h-4 text-white" />,
    name: 'Icon',
    theme: 'primary',
    title: 'title',
    radius: 'normal',
    space: 'normal',
    margin: 'normal',
    iconAnimation: 'none',
    iconPosition: 'left',
  },
};

export const WithAnimateIcon = {
  args: {
    icon: <UserIcon className="w-4 h-4 text-white" />,
    name: 'Icon',
    theme: 'primary',
    title: 'title',
    radius: 'normal',
    space: 'normal',
    margin: 'normal',
    iconAnimation: 'bounce',
    iconPosition: 'left',
  },
};

export const Disabled = {
  args: {
    name: 'Primary',
    theme: 'primary',
    title: 'title',
    disabled: true,
  },
};
