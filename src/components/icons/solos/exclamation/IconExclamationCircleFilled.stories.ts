import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconExclamationCircleFilled } from './IconExclamationCircleFilled';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconExclamationCircleFilled> = {
  title: 'Icons/IconExclamationCircleFilled',
  component: IconExclamationCircleFilled,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconExclamationCircleFilled>;

export const Default: Story = {
  args: {},
};
