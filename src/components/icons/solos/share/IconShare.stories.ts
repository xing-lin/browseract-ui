import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconShare } from './IconShare';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconShare> = {
  title: 'Icons/IconShare',
  component: IconShare,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconShare>;

export const Default: Story = {
  args: {},
};
