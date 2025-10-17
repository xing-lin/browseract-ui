import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoPlay } from './IconDuoPlay';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoPlay> = {
  title: 'Icons/duos/IconDuoPlay',
  component: IconDuoPlay,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoPlay>;

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
      <IconDuoPlay {...args} />
    </button>
  ),
};
