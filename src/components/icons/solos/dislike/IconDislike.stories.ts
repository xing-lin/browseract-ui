import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDislike } from './IconDislike';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDislike> = {
  title: 'Icons/IconDislike',
  component: IconDislike,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDislike>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
