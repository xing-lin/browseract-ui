import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconQuestionCircle } from './IconQuestionCircle';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconQuestionCircle> = {
  title: 'Icons/IconQuestionCircle',
  component: IconQuestionCircle,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconQuestionCircle>;

export const Default: Story = {
  args: {},
};
