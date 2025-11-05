import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSearch } from './IconSearch';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconSearch> = {
  title: 'Icons/IconSearch',
  component: IconSearch,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconSearch>;

export const Default: Story = {
  args: {},
};
