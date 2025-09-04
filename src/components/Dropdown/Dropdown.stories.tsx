import Dropdown from './Dropdown';
import { DropdownArgTypes } from './useDropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // onClick: fn(),
  },
  argTypes: {
    ...DropdownArgTypes,
  },
};

export const Primary = {
  args: {
    theme: 'light',
    themeButton: 'primary',
    name: 'Dropdown',
    children: <span>Lorem ipsum</span>,
  },
};
