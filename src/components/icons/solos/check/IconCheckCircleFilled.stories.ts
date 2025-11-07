import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheckCircleFilled } from './IconCheckCircleFilled';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCheckCircleFilled> = {
  title: 'Icons/IconCheckCircleFilled',
  component: IconCheckCircleFilled,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCheckCircleFilled>;

export const Default: Story = {
  args: {},
};
