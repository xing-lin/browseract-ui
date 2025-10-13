import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuAgent } from './IconMenuAgent';

const meta: Meta<typeof IconMenuAgent> = {
  title: 'Icons/menus/IconMenuAgent',
  component: IconMenuAgent,
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

type Story = StoryObj<typeof IconMenuAgent>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Hover: Story = {
  args: {},
  render: (args) => (
    <button className="icon-btn-hover">
      <IconMenuAgent {...args} />
    </button>
  ),
};
