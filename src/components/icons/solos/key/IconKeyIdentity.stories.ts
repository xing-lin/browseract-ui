import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconKeyIdentity } from './IconKeyIdentity';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconKeyIdentity> = {
  title: 'Icons/IconKeyIdentity',
  component: IconKeyIdentity,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconKeyIdentity>;

export const Default: Story = {
  args: {},
};
