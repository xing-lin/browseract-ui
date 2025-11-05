import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMcpConfig } from './IconMcpConfig';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconMcpConfig> = {
  title: 'Icons/IconMcpConfig',
  component: IconMcpConfig,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconMcpConfig>;

export const Default: Story = {
  args: {},
};
