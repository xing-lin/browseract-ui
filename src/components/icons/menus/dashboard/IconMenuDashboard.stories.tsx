import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuDashboard } from './IconMenuDashboard';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuDashboard> = {
  title: 'Icons/menus/IconMenuDashboard',
  component: IconMenuDashboard,
  argTypes: commonIconActiveArgTypes,
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
    <button
      className="icon-btn-hover"
      type="button"
      aria-label="menu dashboard"
    >
      <IconMenuDashboard {...args} />
    </button>
  ),
};
