import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconEditBlock } from './IconEditBlock';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconEditBlock> = {
  title: 'Icons/IconEditBlock',
  component: IconEditBlock,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconEditBlock>;

export const Default: Story = {
  args: {},
};
