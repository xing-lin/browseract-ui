import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDecorHot } from './IconDecorHot';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDecorHot> = {
  title: 'Icons/decors/IconDecorHot',
  component: IconDecorHot,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDecorHot>;

export const Default: Story = {
  args: {},
};
