import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheck } from './IconCheck';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCheck> = {
  title: 'Icons/IconCheck',
  component: IconCheck,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCheck>;

export const Default: Story = {
  args: {},
};
