import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconExternalLink } from './IconExternalLink';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconExternalLink> = {
  title: 'Icons/IconExternalLink',
  component: IconExternalLink,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconExternalLink>;

export const Default: Story = {
  args: {},
};
