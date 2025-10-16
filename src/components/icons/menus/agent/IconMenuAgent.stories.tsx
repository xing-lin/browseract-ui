import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuAgent } from './IconMenuAgent';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuAgent> = {
  title: 'Icons/menus/IconMenuAgent',
  component: IconMenuAgent,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconMenuAgent>;

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
      aria-label="menu agent"
    >
      <IconMenuAgent {...args} />
    </button>
  ),
};
