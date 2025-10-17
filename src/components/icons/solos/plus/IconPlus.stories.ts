import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconPlus } from './IconPlus';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconPlus> = {
  title: 'Icons/IconPlus',
  component: IconPlus,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconPlus>;

export const Default: Story = {
  args: {},
};
