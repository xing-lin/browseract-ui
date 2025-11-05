import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMcp } from './IconMcp';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconMcp> = {
  title: 'Icons/IconMcp',
  component: IconMcp,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconMcp>;

export const Default: Story = {
  args: {},
};
