import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoIntegration } from './IconDuoIntegration';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoIntegration> = {
  title: 'Icons/duos/IconDuoIntegration',
  component: IconDuoIntegration,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoIntegration>;

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
      aria-label="menu integration"
    >
      <IconDuoIntegration {...args} />
    </button>
  ),
};
