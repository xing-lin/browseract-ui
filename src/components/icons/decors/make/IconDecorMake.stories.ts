import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDecorMake } from './IconDecorMake';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDecorMake> = {
  title: 'Icons/decors/IconDecorMake',
  component: IconDecorMake,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDecorMake>;

export const Default: Story = {
  args: {},
};
