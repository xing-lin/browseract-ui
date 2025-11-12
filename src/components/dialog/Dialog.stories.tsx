import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Dialog
      </button>
    ),
    title:
      'Workflow as MCP Tool Confirguration Workflow as MCP Tool Confirguration',
    children: (
      <div>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
        <p>This is the content of the dialog.</p>
      </div>
    ),
  },
};

export const FooterDivider: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Dialog
      </button>
    ),
    title:
      'Workflow as MCP Tool Confirguration Workflow as MCP Tool Confirguration',
    description:
      'This is the description of the dialog, it can provide more context.',
    children: 'This is the content of the dialog.',
    footerDivider: true,
  },
};

export const StatusSuccess: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Dialog
      </button>
    ),
    title:
      'Workflow as MCP Tool Confirguration Workflow as MCP Tool Confirguration',
    description:
      'This is the description of the dialog, it can provide more context.',
    children: 'This is the content of the dialog.',
    status: 'success',
  },
};

export const OnlyConfirmButton: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Dialog
      </button>
    ),
    title: 'Notification',
    description: 'This dialog only has a confirm button.',
    children: 'Please confirm to continue.',
    onlyConfirmButton: true,
    confirmButtonProps: {
      type: 'primary',
      children: 'OK',
    },
  },
};

export const NoHeaderDialog: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Simple Dialog
      </button>
    ),
    // 没有 title 和 description，用于覆盖 BaseDialog.tsx line 207
    children: (
      <div>
        <p className="mb-4 text-base font-semibold">Content Only Dialog</p>
        <p>This dialog has no title or description in the header.</p>
        <p>All content is in the body section.</p>
      </div>
    ),
  },
};
