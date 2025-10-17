import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoEye } from './IconDuoEye';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoEye> = {
  title: 'Icons/duos/IconDuoEye',
  component: IconDuoEye,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoEye>;

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
      <IconDuoEye {...args} />
    </button>
  ),
};
