import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusIcon } from './StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Components/Status/StatusIcon',
  component: StatusIcon,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusIcon>;

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex gap-4">
      <StatusIcon type="success" />
      <StatusIcon type="info" />
      <StatusIcon type="warning" />
      <StatusIcon type="error" />
    </div>
  ),
};
