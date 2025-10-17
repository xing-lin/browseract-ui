import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoWorkflow } from './IconDuoWorkflow';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoWorkflow> = {
  title: 'Icons/duos/IconDuoWorkflow',
  component: IconDuoWorkflow,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoWorkflow>;

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
      className="_icon-hover-duo-color"
      type="button"
      aria-label="menu workflow"
    >
      <IconDuoWorkflow {...args} />
    </button>
  ),
};
