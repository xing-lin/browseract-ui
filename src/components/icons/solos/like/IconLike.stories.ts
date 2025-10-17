import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconLike } from './IconLike';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconLike> = {
  title: 'Icons/IconLike',
  component: IconLike,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconLike>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
