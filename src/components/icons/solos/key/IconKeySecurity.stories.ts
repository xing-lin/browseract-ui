import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconKeySecurity } from './IconKeySecurity';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconKeySecurity> = {
  title: 'Icons/IconKeySecurity',
  component: IconKeySecurity,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconKeySecurity>;

export const Default: Story = {
  args: {},
};
