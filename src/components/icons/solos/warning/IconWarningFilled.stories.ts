import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconWarningFilled } from './IconWarningFilled';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconWarningFilled> = {
  title: 'Icons/IconWarningFilled',
  component: IconWarningFilled,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconWarningFilled>;

export const Default: Story = {
  args: {},
};
