import type { Meta, StoryObj } from '@storybook/react';
import { IconLike } from './IconLike';

const meta: Meta<typeof IconLike> = {
  title: 'Icons/IconLike',
  component: IconLike,
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

type Story = StoryObj<typeof IconLike>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
