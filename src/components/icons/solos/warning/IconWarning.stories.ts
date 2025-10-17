import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconWarning } from './IconWarning';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconWarning> = {
  title: 'Icons/IconWarning',
  component: IconWarning,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconWarning>;

export const Default: Story = {
  args: {},
};
