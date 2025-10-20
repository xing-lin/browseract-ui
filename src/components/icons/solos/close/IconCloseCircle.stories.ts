import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCloseCircle } from './IconCloseCircle';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCloseCircle> = {
  title: 'Icons/IconCloseCircle',
  component: IconCloseCircle,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCloseCircle>;

export const Default: Story = {
  args: {},
};
