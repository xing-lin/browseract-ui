import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconChain } from './IconChain';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconChain> = {
  title: 'Icons/IconChain',
  component: IconChain,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconChain>;

export const Default: Story = {
  args: {},
};
