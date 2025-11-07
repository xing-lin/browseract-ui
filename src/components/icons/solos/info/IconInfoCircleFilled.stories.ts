import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconInfoCircleFilled } from './IconInfoCircleFilled';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconInfoCircleFilled> = {
  title: 'Icons/IconInfoCircleFilled',
  component: IconInfoCircleFilled,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconInfoCircleFilled>;

export const Default: Story = {
  args: {},
};
