import Card from './Card';
import { CardArgTypes } from './useCard';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // onClick: fn(),
  },
  argTypes: {
    ...CardArgTypes,
  },
};

export const Primary = {
  args: {
    type: 'website',
    name: 'Primary',
    link: 'google.com',
    desc: 'Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description',
  },
};
