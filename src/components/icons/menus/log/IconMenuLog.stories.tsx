import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuLog } from './IconMenuLog';

const meta: Meta<typeof IconMenuLog> = {
  title: 'Icons/menus/IconMenuLog',
  component: IconMenuLog,
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

type Story = StoryObj<typeof IconMenuLog>;

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
      <IconMenuLog {...args} />
    </button>
  ),
};
