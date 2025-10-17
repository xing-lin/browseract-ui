import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconLoading } from './IconLoading';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconLoading> = {
  title: 'Icons/IconLoading',
  component: IconLoading,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconLoading>;

export const Default: Story = {
  args: {},
};
