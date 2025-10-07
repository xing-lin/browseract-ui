import type { Meta, StoryObj } from '@storybook/react';
import IconDislike from './IconDislike';

const meta: Meta<typeof IconDislike> = {
  title: 'Icons/IconDislike',
  component: IconDislike,
  args: {
    'aria-label': 'Dislike Icon',
    width: 16,
    height: 16,
  },
};
export default meta;

type Story = StoryObj<typeof IconDislike>;

export const Default: Story = {};
