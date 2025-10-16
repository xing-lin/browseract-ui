import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuLog } from './IconMenuLog';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuLog> = {
  title: 'Icons/menus/IconMenuLog',
  component: IconMenuLog,
  argTypes: commonIconActiveArgTypes,
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
    <button
      className="_icon-hover-dual-color"
      type="button"
      aria-label="menu log"
    >
      <IconMenuLog {...args} />
    </button>
  ),
};
