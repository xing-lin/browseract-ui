import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuHome } from './IconMenuHome';

const meta: Meta<typeof IconMenuHome> = {
  title: 'Icons/menus/IconMenuHome',
  component: IconMenuHome,
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

type Story = StoryObj<typeof IconMenuHome>;

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
      <IconMenuHome {...args} />
    </button>
  ),
};
