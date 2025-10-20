import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDuoMirrorImage } from './IconDuoMirrorImage';
import { commonIconActiveArgTypes } from '../../constants';

const meta: Meta<typeof IconDuoMirrorImage> = {
  title: 'Icons/duos/IconDuoMirrorImage',
  component: IconDuoMirrorImage,
  argTypes: commonIconActiveArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDuoMirrorImage>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Hover: Story = {
  args: {},
  render: (args) => (
    <button
      className="_icon-hover-duo-color"
      type="button"
      aria-label="menu mirror image"
    >
      <IconDuoMirrorImage {...args} />
    </button>
  ),
};
