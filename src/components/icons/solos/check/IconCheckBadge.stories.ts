import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheckBadge } from './IconCheckBadge';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCheckBadge> = {
  title: 'Icons/IconCheckBadge',
  component: IconCheckBadge,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCheckBadge>;

export const Default: Story = {
  args: {},
};
