import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputSearch } from './InputSearch';

const meta: Meta<typeof InputSearch> = {
  title: 'Components/Inputs/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
    },
    maxWidth: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: 350,
  },
};

export const Loading: Story = {
  args: {
    maxWidth: 350,
    loading: true,
  },
};
