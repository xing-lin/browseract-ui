import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDelete } from './IconDelete';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDelete> = {
  title: 'Icons/IconDelete',
  component: IconDelete,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDelete>;

export const Default: Story = {
  args: {},
};
