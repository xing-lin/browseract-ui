import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconEllipsis } from './IconEllipsis';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconEllipsis> = {
  title: 'Icons/IconEllipsis',
  component: IconEllipsis,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconEllipsis>;

export const Default: Story = {
  args: {},
};
