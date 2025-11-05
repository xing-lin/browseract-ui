import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconChainBreak } from './IconChainBreak';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconChainBreak> = {
  title: 'Icons/IconChainBreak',
  component: IconChainBreak,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconChainBreak>;

export const Default: Story = {
  args: {},
};
