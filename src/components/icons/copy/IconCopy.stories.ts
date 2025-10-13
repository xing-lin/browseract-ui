import type { Meta, StoryObj } from '@storybook/react';
import { IconCopy } from './IconCopy';

const meta: Meta<typeof IconCopy> = {
  title: 'Icons/IconCopy',
  component: IconCopy,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconCopy>;

export const Default: Story = {
  args: {},
};
