import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoLog } from './IconDuoLog';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoLog> = {
  title: 'Icons/duos/IconDuoLog',
  component: IconDuoLog,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoLog>;

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
      aria-label="menu log"
    >
      <IconDuoLog {...args} />
    </button>
  ),
};
