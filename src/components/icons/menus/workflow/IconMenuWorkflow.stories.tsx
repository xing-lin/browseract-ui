import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuWorkflow } from './IconMenuWorkflow';

const meta: Meta<typeof IconMenuWorkflow> = {
  title: 'Icons/menus/IconMenuWorkflow',
  component: IconMenuWorkflow,
  argTypes: {
    color: {
      control: 'color',
    },
    active: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenuWorkflow>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Hover: Story = {
  args: {},
  render: (args) => (
    <button className="icon-btn-hover">
      <IconMenuWorkflow {...args} />
    </button>
  ),
};
