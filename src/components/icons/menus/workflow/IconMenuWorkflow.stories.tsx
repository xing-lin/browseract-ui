import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuWorkflow } from './IconMenuWorkflow';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuWorkflow> = {
  title: 'Icons/menus/IconMenuWorkflow',
  component: IconMenuWorkflow,
  argTypes: commonIconActiveArgTypes,
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
    <button
      className="_icon-hover-dual-color"
      type="button"
      aria-label="menu workflow"
    >
      <IconMenuWorkflow {...args} />
    </button>
  ),
};
