import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuCredential } from './IconMenuCredential';

const meta: Meta<typeof IconMenuCredential> = {
  title: 'Icons/menus/IconMenuCredential',
  component: IconMenuCredential,
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

type Story = StoryObj<typeof IconMenuCredential>;

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
      <IconMenuCredential {...args} />
    </button>
  ),
};
