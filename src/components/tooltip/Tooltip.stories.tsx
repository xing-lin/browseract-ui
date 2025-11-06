import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    contentMaxWidth: {
      control: 'number',
    },
    open: {
      control: 'boolean',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tooltip',
    content: 'Tooltip content',
    open: true,
  },
};

export const LongContent: Story = {
  args: {
    children: 'Tooltip',
    content:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    open: true,
  },
};
