import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheckCircle } from './IconCheckCircle';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCheckCircle> = {
  title: 'Icons/IconCheckCircle',
  component: IconCheckCircle,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCheckCircle>;

export const Default: Story = {
  args: {},
};
