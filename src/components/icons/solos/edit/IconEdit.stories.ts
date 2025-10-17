import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconEdit } from './IconEdit';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconEdit> = {
  title: 'Icons/IconEdit',
  component: IconEdit,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconEdit>;

export const Default: Story = {
  args: {},
};
