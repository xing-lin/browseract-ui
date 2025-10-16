import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuCredential } from './IconMenuCredential';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuCredential> = {
  title: 'Icons/menus/IconMenuCredential',
  component: IconMenuCredential,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconMenuCredential>;

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
      aria-label="menu credential"
    >
      <IconMenuCredential {...args} />
    </button>
  ),
};
