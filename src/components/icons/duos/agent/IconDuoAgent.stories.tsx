import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoAgent } from './IconDuoAgent';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoAgent> = {
  title: 'Icons/duos/IconDuoAgent',
  component: IconDuoAgent,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoAgent>;

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
      aria-label="menu agent"
    >
      <IconDuoAgent {...args} />
    </button>
  ),
};
