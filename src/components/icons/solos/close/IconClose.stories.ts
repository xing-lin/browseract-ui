import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconClose } from './IconClose';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconClose> = {
  title: 'Icons/IconClose',
  component: IconClose,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconClose>;

export const Default: Story = {
  args: {},
};
