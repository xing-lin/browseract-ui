import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconToolPreview } from './IconToolPreview';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconToolPreview> = {
  title: 'Icons/IconToolPreview',
  component: IconToolPreview,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconToolPreview>;

export const Default: Story = {
  args: {},
};
