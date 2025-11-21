import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconPlane } from './IconPlane';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconPlane> = {
  title: 'Icons/IconPlane',
  component: IconPlane,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconPlane>;

export const Default: Story = {
  args: {},
};
