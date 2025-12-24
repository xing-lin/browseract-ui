import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonLink } from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/Server/ButtonLink',
  component: ButtonLink,
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
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: '按钮的尺寸',
    },
    href: {
      control: 'text',
      description: '链接地址',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

/**
 * ## 默认链接按钮
 */
export const Default: Story = {
  args: {
    href: '/',
    children: 'Go to Home',
  },
};

/**
 * ## 不同变体
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonLink
        href="/"
        variant="default"
      >
        Default
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="destructive"
      >
        Destructive
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="outline"
      >
        Outline
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="secondary"
      >
        Secondary
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="ghost"
      >
        Ghost
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="link"
      >
        Link
      </ButtonLink>
    </div>
  ),
};

/**
 * ## 不同尺寸
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonLink
        href="/"
        size="sm"
      >
        Small
      </ButtonLink>
      <ButtonLink
        href="/"
        size="default"
      >
        Default
      </ButtonLink>
      <ButtonLink
        href="/"
        size="lg"
      >
        Large
      </ButtonLink>
    </div>
  ),
};

/**
 * ## 带图标
 */
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonLink href="/about">
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
        Go to About
      </ButtonLink>
      <ButtonLink
        href="/contact"
        variant="outline"
      >
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
        Contact Us
      </ButtonLink>
      <ButtonLink
        href="/docs"
        variant="secondary"
      >
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
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        Documentation
      </ButtonLink>
    </div>
  ),
};

/**
 * ## 实际使用场景
 */
export const UseCases: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">导航链接</h3>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/">首页</ButtonLink>
          <ButtonLink
            href="/about"
            variant="outline"
          >
            关于我们
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="ghost"
          >
            联系我们
          </ButtonLink>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">操作链接</h3>
        <div className="flex flex-wrap gap-2">
          <ButtonLink
            href="/dashboard"
            variant="default"
          >
            进入控制台
          </ButtonLink>
          <ButtonLink
            href="/settings"
            variant="secondary"
          >
            设置
          </ButtonLink>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">外部链接</h3>
        <div className="flex flex-wrap gap-2">
          <ButtonLink
            href="https://github.com"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </ButtonLink>
        </div>
      </div>
    </div>
  ),
};
