import type { Meta, StoryObj } from '@storybook/react';
import { IconDislike } from './IconDislike';

const meta: Meta<typeof IconDislike> = {
  title: 'Icons/IconDislike',
  component: IconDislike,
  argTypes: {
    color: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof IconDislike>;

export const Default: Story = {};
