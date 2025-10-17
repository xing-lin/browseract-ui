import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconInternalLink } from './IconInternalLink';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconInternalLink> = {
  title: 'Icons/IconInternalLink',
  component: IconInternalLink,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconInternalLink>;

export const Default: Story = {
  args: {},
};
