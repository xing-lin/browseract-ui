import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuTemplate } from './IconMenuTemplate';

const meta: Meta<typeof IconMenuTemplate> = {
  title: 'Icons/menus/IconMenuTemplate',
  component: IconMenuTemplate,
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

type Story = StoryObj<typeof IconMenuTemplate>;

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
      <IconMenuTemplate {...args} />
    </button>
  ),
};
