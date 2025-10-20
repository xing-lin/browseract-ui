import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconKeyIdentityRevoke } from './IconKeyIdentityRevoke';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconKeyIdentityRevoke> = {
  title: 'Icons/IconKeyIdentityRevoke',
  component: IconKeyIdentityRevoke,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconKeyIdentityRevoke>;

export const Default: Story = {
  args: {},
};
