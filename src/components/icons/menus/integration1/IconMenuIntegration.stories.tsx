import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuIntegration } from './IconMenuIntegration';

const meta: Meta<typeof IconMenuIntegration> = {
  title: 'Icons/menus/IconMenuIntegration',
  component: IconMenuIntegration,
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

type Story = StoryObj<typeof IconMenuIntegration>;

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
      <IconMenuIntegration {...args} />
    </button>
  ),
};
