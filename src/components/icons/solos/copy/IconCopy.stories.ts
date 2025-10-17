import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCopy } from './IconCopy';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCopy> = {
  title: 'Icons/IconCopy',
  component: IconCopy,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCopy>;

export const Default: Story = {
  args: {},
};
