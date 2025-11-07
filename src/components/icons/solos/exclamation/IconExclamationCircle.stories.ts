import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconExclamationCircle } from './IconExclamationCircle';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconExclamationCircle> = {
  title: 'Icons/IconExclamationCircle',
  component: IconExclamationCircle,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconExclamationCircle>;

export const Default: Story = {
  args: {},
};
