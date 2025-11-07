import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconInfoCircle } from './IconInfoCircle';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconInfoCircle> = {
  title: 'Icons/IconInfoCircle',
  component: IconInfoCircle,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconInfoCircle>;

export const Default: Story = {
  args: {},
};
