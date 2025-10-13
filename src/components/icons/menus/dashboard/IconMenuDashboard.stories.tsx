import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuDashboard } from './IconMenuDashboard';

const meta: Meta<typeof IconMenuDashboard> = {
  title: 'Icons/menus/IconMenuDashboard',
  component: IconMenuDashboard,
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

type Story = StoryObj<typeof IconMenuDashboard>;

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
      <IconMenuDashboard {...args} />
    </button>
  ),
};
