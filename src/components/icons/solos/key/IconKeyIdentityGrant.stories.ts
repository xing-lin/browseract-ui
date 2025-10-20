import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconKeyIdentityGrant } from './IconKeyIdentityGrant';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconKeyIdentityGrant> = {
  title: 'Icons/IconKeyIdentityGrant',
  component: IconKeyIdentityGrant,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconKeyIdentityGrant>;

export const Default: Story = {
  args: {},
};
