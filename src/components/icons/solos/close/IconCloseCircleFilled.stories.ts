import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCloseCircleFilled } from './IconCloseCircleFilled';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconCloseCircleFilled> = {
  title: 'Icons/IconCloseCircleFilled',
  component: IconCloseCircleFilled,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconCloseCircleFilled>;

export const Default: Story = {
  args: {},
};
