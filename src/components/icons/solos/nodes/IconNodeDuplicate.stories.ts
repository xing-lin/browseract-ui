import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconNodeDuplicate } from './IconNodeDuplicate';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconNodeDuplicate> = {
  title: 'Icons/IconNodeDuplicate',
  component: IconNodeDuplicate,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconNodeDuplicate>;

export const Default: Story = {
  args: {},
};
