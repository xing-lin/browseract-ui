import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuPlan } from './IconMenuPlan';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuPlan> = {
  title: 'Icons/menus/IconMenuPlan',
  component: IconMenuPlan,
  argTypes: commonIconActiveArgTypes,
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
    <button
      className="_icon-hover-dual-color"
      type="button"
      aria-label="menu plan"
    >
      <IconMenuPlan {...args} />
    </button>
  ),
};
