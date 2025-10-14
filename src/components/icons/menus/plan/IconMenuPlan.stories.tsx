import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuPlan } from './IconMenuPlan';

const meta: Meta<typeof IconMenuPlan> = {
  title: 'Icons/menus/IconMenuPlan',
  component: IconMenuPlan,
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

type Story = StoryObj<typeof IconMenuPlan>;

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
      <IconMenuPlan {...args} />
    </button>
  ),
};
