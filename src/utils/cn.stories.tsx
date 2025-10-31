import type { Meta, StoryObj } from '@storybook/react-vite';
import { cn } from './cn';

/**
 * `cn` 是一个组合 `clsx` 和 `tailwind-merge` 的工具函数，用于智能合并类名。
 *
 * **核心功能：**
 * - 条件性地添加类名
 * - 智能处理 Tailwind CSS 类名冲突（后者覆盖前者）
 */
const meta: Meta = {
  title: 'Utils/cn',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## 基础用法
 */
export const BasicUsage: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">合并多个类名</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
          <code>{`cn('text-red-500', 'bg-blue-100', 'p-4')`}</code>
        </pre>
        <div className="mt-2 text-sm text-gray-600">
          结果: <code>{cn('text-red-500', 'bg-blue-100', 'p-4')}</code>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">条件类名</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
          <code>{`cn('btn', { 'btn-active': isActive, 'btn-disabled': isDisabled })`}</code>
        </pre>
        <div className="mt-2 text-sm text-gray-600">
          结果:{' '}
          <code>
            {cn('btn', { 'btn-active': true, 'btn-disabled': false })}
          </code>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Tailwind 类名冲突处理</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
          <code>{`cn('text-red-500', 'text-blue-500') // 后者覆盖前者`}</code>
        </pre>
        <div className="mt-2 text-sm text-gray-600">
          结果: <code>{cn('text-red-500', 'text-blue-500')}</code>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## 实际应用
 */
export const RealWorldExample: Story = {
  render: () => {
    const isActive = true;

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">组件中的使用</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            <code>{`function Button({ variant = 'primary', disabled, className }) {
  return (
    <button
      className={cn(
        'rounded font-semibold transition-colors',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-200 text-gray-800': variant === 'secondary',
        },
        disabled && 'opacity-50 cursor-not-allowed',
        className // 用户类名可覆盖前面的样式
      )}
    />
  );
}`}</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">效果演示</h3>
          <div className="flex gap-3 flex-wrap">
            <button
              className={cn(
                'rounded font-semibold transition-colors px-4 py-2',
                'bg-blue-500 text-white hover:bg-blue-600',
              )}
            >
              Primary
            </button>

            <button
              className={cn(
                'rounded font-semibold transition-colors px-4 py-2',
                'bg-gray-200 text-gray-800 hover:bg-gray-300',
              )}
            >
              Secondary
            </button>

            <button
              className={cn(
                'rounded font-semibold transition-colors px-4 py-2',
                'bg-blue-500 text-white',
                { 'ring-2 ring-blue-300': isActive },
              )}
            >
              Active State
            </button>

            <button
              className={cn(
                'rounded font-semibold transition-colors px-4 py-2',
                'bg-blue-500 text-white',
                'opacity-50 cursor-not-allowed',
              )}
              disabled
            >
              Disabled
            </button>
          </div>
        </div>
      </div>
    );
  },
};
