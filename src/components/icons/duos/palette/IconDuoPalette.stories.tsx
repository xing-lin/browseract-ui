import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoPalette } from './IconDuoPalette';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoPalette> = {
  title: 'Icons/duos/IconDuoPalette',
  component: IconDuoPalette,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoPalette>;

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
      aria-label="menu palette"
    >
      <IconDuoPalette {...args} />
    </button>
  ),
};
