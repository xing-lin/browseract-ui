import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSync } from './IconSync';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconSync> = {
  title: 'Icons/IconSync',
  component: IconSync,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconSync>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {},
  render: (args) => (
    <IconSync
      {...args}
      className="_spinner"
    />
  ),
};
