import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDecorApiWorkflow } from './IconDecorApiWorkflow';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDecorApiWorkflow> = {
  title: 'Icons/decors/IconDecorApiWorkflow',
  component: IconDecorApiWorkflow,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDecorApiWorkflow>;

export const Default: Story = {
  args: {},
};
