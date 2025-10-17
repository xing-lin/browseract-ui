import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoTemplate } from './IconDuoTemplate';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoTemplate> = {
  title: 'Icons/duos/IconDuoTemplate',
  component: IconDuoTemplate,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoTemplate>;

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
      aria-label="menu template"
    >
      <IconDuoTemplate {...args} />
    </button>
  ),
};
