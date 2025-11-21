import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconDocumentPreview } from './IconDocumentPreview';
import { commonIconArgTypes } from '../../constants';

const meta: Meta<typeof IconDocumentPreview> = {
  title: 'Icons/IconDocumentPreview',
  component: IconDocumentPreview,
  argTypes: commonIconArgTypes,
};

export default meta;

type Story = StoryObj<typeof IconDocumentPreview>;

export const Default: Story = {
  args: {},
};
