import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconAdd } from './IconAdd';

const meta: Meta<typeof IconAdd> = {
  title: 'Icons/IconAdd',
  component: IconAdd,
  argTypes: {
    color: {
      control: 'color',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconAdd>;

export const Default: Story = {
  args: {},
};
