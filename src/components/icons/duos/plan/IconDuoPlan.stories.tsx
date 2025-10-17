import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoPlan } from './IconDuoPlan';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoPlan> = {
  title: 'Icons/duos/IconDuoPlan',
  component: IconDuoPlan,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoPlan>;

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
      aria-label="menu plan"
    >
      <IconDuoPlan {...args} />
    </button>
  ),
};
