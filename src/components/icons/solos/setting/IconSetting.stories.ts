import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSetting } from './IconSetting';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconSetting> = {
  title: 'Icons/IconSetting',
  component: IconSetting,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconSetting>;

export const Default: Story = {
  args: {},
};
