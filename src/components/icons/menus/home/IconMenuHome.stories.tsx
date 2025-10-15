import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuHome } from './IconMenuHome';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuHome> = {
  title: 'Icons/menus/IconMenuHome',
  component: IconMenuHome,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconMenuHome>;

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
      aria-label="menu home"
    >
      <IconMenuHome {...args} />
    </button>
  ),
};
