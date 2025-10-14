import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDislike } from './IconDislike';

const meta: Meta<typeof IconDislike> = {
  title: 'Icons/IconDislike',
  component: IconDislike,
  argTypes: {
    color: {
      control: 'color',
    },
    active: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconDislike>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
