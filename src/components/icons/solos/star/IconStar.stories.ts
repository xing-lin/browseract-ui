import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconStar } from './IconStar';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconStar> = {
  title: 'Icons/IconStar',
  component: IconStar,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconStar>;

export const Default: Story = {
  args: {},
};
