import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenuTemplate } from './IconMenuTemplate';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconMenuTemplate> = {
  title: 'Icons/menus/IconMenuTemplate',
  component: IconMenuTemplate,
  argTypes: commonIconActiveArgTypes,
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
    <button
      className="_icon-hover-dual-color"
      type="button"
      aria-label="menu template"
    >
      <IconMenuTemplate {...args} />
    </button>
  ),
};
