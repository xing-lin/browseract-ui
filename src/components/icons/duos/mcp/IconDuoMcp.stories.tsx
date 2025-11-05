import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoMcp } from './IconDuoMcp';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoMcp> = {
  title: 'Icons/duos/IconDuoMcp',
  component: IconDuoMcp,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoMcp>;

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
      <IconDuoMcp {...args} />
    </button>
  ),
};
