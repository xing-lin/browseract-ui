import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMinusCircle } from './IconMinusCircle';

const meta: Meta<typeof IconMinusCircle> = {
  title: 'Icons/IconMinusCircle',
  component: IconMinusCircle,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMinusCircle>;

export const Default: Story = {
  args: {},
};
