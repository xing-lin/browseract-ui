import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconExpand } from './IconExpand';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconExpand> = {
  title: 'Icons/IconExpand',
  component: IconExpand,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconExpand>;

export const Default: Story = {
  args: {},
};
