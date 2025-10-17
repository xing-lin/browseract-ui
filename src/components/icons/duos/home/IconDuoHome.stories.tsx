import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoHome } from './IconDuoHome';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoHome> = {
  title: 'Icons/duos/IconDuoHome',
  component: IconDuoHome,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoHome>;

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
      aria-label="menu home"
    >
      <IconDuoHome {...args} />
    </button>
  ),
};
