import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSpark } from './IconSpark';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconSpark> = {
  title: 'Icons/IconSpark',
  component: IconSpark,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconSpark>;

export const Default: Story = {
  args: {},
};
