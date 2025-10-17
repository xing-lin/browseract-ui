import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconGuideBook } from './IconGuideBook';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconGuideBook> = {
  title: 'Icons/IconGuideBook',
  component: IconGuideBook,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconGuideBook>;

export const Default: Story = {
  args: {},
};
