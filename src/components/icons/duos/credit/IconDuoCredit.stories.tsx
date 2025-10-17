import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoCredit } from './IconDuoCredit';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoCredit> = {
  title: 'Icons/duos/IconDuoCredit',
  component: IconDuoCredit,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoCredit>;

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
      aria-label="menu workflow"
    >
      <IconDuoCredit {...args} />
    </button>
  ),
};
