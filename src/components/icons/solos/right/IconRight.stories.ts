import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconRight } from './IconRight';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconRight> = {
  title: 'Icons/IconRight',
  component: IconRight,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconRight>;

export const Default: Story = {
  args: {},
};
