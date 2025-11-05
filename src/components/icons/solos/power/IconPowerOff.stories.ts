import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconPowerOff } from './IconPowerOff';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconPowerOff> = {
  title: 'Icons/IconPowerOff',
  component: IconPowerOff,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconPowerOff>;

export const Default: Story = {
  args: {},
};
