import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconApiAutomation } from './IconApiAutomation';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconApiAutomation> = {
  title: 'Icons/IconApiAutomation',
  component: IconApiAutomation,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconApiAutomation>;

export const Default: Story = {
  args: {},
};
