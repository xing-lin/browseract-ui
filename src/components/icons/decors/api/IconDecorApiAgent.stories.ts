import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDecorApiAgent } from './IconDecorApiAgent';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDecorApiAgent> = {
  title: 'Icons/decors/IconDecorApiAgent',
  component: IconDecorApiAgent,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDecorApiAgent>;

export const Default: Story = {
  args: {},
};
