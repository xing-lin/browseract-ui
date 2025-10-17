import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoDashboard } from './IconDuoDashboard';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoDashboard> = {
  title: 'Icons/duos/IconDuoDashboard',
  component: IconDuoDashboard,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoDashboard>;

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
      className="_icon-hover-duo-color"
      type="button"
      aria-label="menu dashboard"
    >
      <IconDuoDashboard {...args} />
    </button>
  ),
};
