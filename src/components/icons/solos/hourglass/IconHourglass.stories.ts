import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconHourglass } from './IconHourglass';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconHourglass> = {
  title: 'Icons/IconHourglass',
  component: IconHourglass,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconHourglass>;

export const Default: Story = {
  args: {},
};
