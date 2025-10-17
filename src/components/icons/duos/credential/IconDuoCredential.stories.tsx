import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoCredential } from './IconDuoCredential';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoCredential> = {
  title: 'Icons/duos/IconDuoCredential',
  component: IconDuoCredential,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoCredential>;

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
      aria-label="menu credential"
    >
      <IconDuoCredential {...args} />
    </button>
  ),
};
