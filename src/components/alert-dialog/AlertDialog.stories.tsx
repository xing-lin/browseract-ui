import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './AlertDialog';
import { BaseDialogComponent } from '../dialog/BaseDialog';
import {
  AlertDialog as AlertDialogUI,
  AlertDialogTrigger as AlertDialogTriggerUI,
  AlertDialogContent as AlertDialogContentUI,
  AlertDialogHeader as AlertDialogHeaderUI,
  AlertDialogFooter as AlertDialogFooterUI,
  AlertDialogTitle as AlertDialogTitleUI,
  AlertDialogDescription as AlertDialogDescriptionUI,
  AlertDialogCancel as AlertDialogCancelUI,
} from '../ui/alert-dialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
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
        Delete Account
      </button>
    ),
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    children: (
      <div>
        <p>Additional content can be placed here if needed.</p>
      </div>
    ),
  },
};

export const FooterDivider: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Alert
      </button>
    ),
    title: 'Workflow as MCP Tool Configuration',
    description:
      'This is the description of the alert dialog, it can provide more context.',
    children: 'This is the content of the alert dialog.',
    footerDivider: true,
    confirmButtonProps: {
      type: 'primary',
      children: 'Confirm',
    },
    cancelButtonProps: {
      type: 'default',
      children: 'Cancel',
    },
  },
};

export const StatusWarning: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Warning Action
      </button>
    ),
    title: 'Warning: Irreversible Action',
    description:
      'Please be careful with this action. It may have unintended consequences.',
    children: 'Additional warning details can be displayed here.',
    status: 'warning',
  },
};

export const StatusError: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Error Action
      </button>
    ),
    title: 'Error Occurred',
    description: 'An error has occurred and requires your attention.',
    children: 'Error details and potential solutions.',
    status: 'error',
  },
};

export const StatusSuccess: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Success Action
      </button>
    ),
    title: 'Operation Successful',
    description: 'Your action has been completed successfully.',
    children: 'Success details and next steps.',
    status: 'success',
  },
};

export const StatusInfo: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Info Action
      </button>
    ),
    title: 'Information',
    description: 'Here is some important information for you.',
    children: 'Additional information content.',
    status: 'info',
  },
};

export const LongContent: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Long Content Alert
      </button>
    ),
    title: 'Terms and Conditions',
    description:
      'Please read through the following terms and conditions carefully.',
    children: (
      <div>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>
            This is line {i + 1} of the content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        ))}
      </div>
    ),
  },
};

export const CustomFooter: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Open Custom Footer Alert
      </button>
    ),
    title: 'Custom Footer Example',
    description: 'This alert dialog has a custom footer.',
    children: 'You can provide your own footer component.',
    footer: (
      <div className="flex w-full justify-between">
        <button className="px-4 py-2 text-sm">Learn More</button>
        <div className="flex gap-2">
          <button className="rounded bg-gray-200 px-4 py-2 text-sm">
            Cancel
          </button>
          <button className="bg-primary rounded px-4 py-2 text-sm">
            Confirm
          </button>
        </div>
      </div>
    ),
  },
};

export const OnlyConfirmButton: Story = {
  args: {
    trigger: (
      <button className="bg-primary rounded px-4 py-2 text-black">
        Show Important Message
      </button>
    ),
    title: 'Important Information',
    description: 'This alert dialog only has a confirm button to acknowledge.',
    children: 'You must acknowledge this information before proceeding.',
    onlyConfirmButton: true,
  },
};

/**
 * 边界测试：用于覆盖防御性代码
 * 这个测试直接使用 BaseDialogComponent，故意缺少 Action 组件
 * 在正常使用中不应该发生，但为了 100% 测试覆盖率
 */
export const EdgeCaseMissingAction: StoryObj<typeof BaseDialogComponent> = {
  render: () => {
    // 故意构造一个缺少 Action 的 primitives 来测试防御性代码
    const incompletePrimitives = {
      Root: AlertDialogUI,
      Trigger: AlertDialogTriggerUI,
      Content: AlertDialogContentUI,
      Header: AlertDialogHeaderUI,
      Footer: AlertDialogFooterUI,
      Title: AlertDialogTitleUI,
      Description: AlertDialogDescriptionUI,
      Cancel: AlertDialogCancelUI,
      // 故意不传 Action 来触发防御性的 null 分支 (BaseDialog.tsx line 271)
    };

    return (
      <BaseDialogComponent
        trigger={
          <button className="bg-primary rounded px-4 py-2 text-black">
            Test Coverage
          </button>
        }
        title="Edge Case Test"
        description="Testing defensive code for missing Action component"
        type="alert-dialog"
        onlyConfirmButton={false}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        primitives={incompletePrimitives as any}
      >
        This tests the defensive null return in BaseDialog.
      </BaseDialogComponent>
    );
  },
};
