import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconPlusCircle } from './IconPlusCircle';

const meta: Meta<typeof IconPlusCircle> = {
  title: 'Icons/IconPlusCircle',
  component: IconPlusCircle,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconPlusCircle>;

export const Default: Story = {
  args: {},
};
