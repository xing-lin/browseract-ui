import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Client/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: '按钮的视觉样式变体',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: '按钮的尺寸',
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: '图标位置',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * ## 默认按钮
 */
export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

/**
 * ## 不同变体
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * ## 不同尺寸（包含 xs）
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * ## Loading 状态
 */
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button loading>Loading...</Button>
      <Button
        variant="outline"
        loading
      >
        Loading Outline
      </Button>
      <Button
        variant="destructive"
        loading
      >
        Loading Destructive
      </Button>
      <Button
        size="lg"
        loading
      >
        Large Loading
      </Button>
    </div>
  ),
};

/**
 * ## 交互式 Loading
 */
export const InteractiveLoading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return (
      <div className="space-y-4">
        <Button
          loading={loading}
          onClick={handleClick}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
        <p className="text-muted-foreground text-sm">
          点击按钮查看 loading 状态（2秒后自动恢复）
        </p>
      </div>
    );
  },
};

/**
 * ## 禁用状态
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled</Button>
      <Button
        variant="outline"
        disabled
      >
        Disabled Outline
      </Button>
      <Button
        variant="destructive"
        disabled
      >
        Disabled Destructive
      </Button>
      <Button
        loading
        disabled
      >
        Loading & Disabled
      </Button>
    </div>
  ),
};

/**
 * ## 带图标
 */
export const WithIcon: Story = {
  render: () => {
    const ArrowRightIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    );

    const SaveIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-7-7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    );

    return (
      <div className="flex flex-wrap gap-4">
        <Button icon={ArrowRightIcon}>Next</Button>
        <Button
          variant="outline"
          icon={SaveIcon}
        >
          Save
        </Button>
        <Button
          icon={ArrowRightIcon}
          loading
        >
          Loading with Icon
        </Button>
      </div>
    );
  },
};

/**
 * ## 图标位置
 */
export const IconPosition: Story = {
  render: () => {
    const ArrowRightIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    );

    const DownloadIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line
          x1="12"
          x2="12"
          y1="15"
          y2="3"
        />
      </svg>
    );

    return (
      <div className="flex flex-wrap gap-4">
        <Button
          icon={ArrowRightIcon}
          iconPosition="left"
        >
          Icon Left
        </Button>
        <Button
          icon={DownloadIcon}
          iconPosition="right"
        >
          Icon Right
        </Button>
        <Button
          icon={ArrowRightIcon}
          iconPosition="left"
          loading
        >
          Loading (Icon Left)
        </Button>
        <Button
          icon={DownloadIcon}
          iconPosition="right"
          loading
        >
          Loading (Icon Right)
        </Button>
      </div>
    );
  },
};

/**
 * ## 图标按钮
 */
export const IconOnly: Story = {
  render: () => {
    const HeartIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    );

    const HeartIcon20 = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    );

    const HeartIcon24 = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    );

    return (
      <div className="flex flex-wrap gap-4">
        <Button
          size="icon-sm"
          icon={HeartIcon}
        />
        <Button
          size="icon"
          icon={HeartIcon20}
        />
        <Button
          size="icon-lg"
          icon={HeartIcon24}
        />
        <Button
          size="icon"
          icon={HeartIcon20}
          loading
        />
      </div>
    );
  },
};
