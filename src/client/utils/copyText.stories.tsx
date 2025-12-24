'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { copyText } from './copyText';
import type { CopyResult } from './copyText';

/**
 * ## copyText - 复制文本到剪贴板
 *
 * 将文本复制到剪贴板。优先使用现代 Clipboard API，不支持时降级到 execCommand。
 *
 * **特性：**
 * - ✅ 支持现代浏览器的 Clipboard API
 * - ✅ 自动降级到 execCommand（兼容老浏览器）
 * - ✅ 支持 iOS Safari
 * - ✅ 返回详细的成功/失败状态
 * - ✅ 异步 API，支持 async/await
 *
 * **注意：**
 * - ⚠️ 必须在 Next.js 的 Client Component 中使用
 * - ⚠️ 需要 HTTPS 或 localhost 环境（Clipboard API）
 * - ⚠️ 建议在用户交互事件中调用
 */
const meta: Meta = {
  title: 'Utils/copyText',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '复制文本到剪贴板，支持现代和传统浏览器。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 辅助组件：基础用法 Demo
function BasicUsageDemo() {
  const [result, setResult] = useState<CopyResult | null>(null);

  const handleCopy = async (text: string) => {
    const res = await copyText(text);
    setResult(res);
    setTimeout(() => setResult(null), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleCopy('Hello, World!')}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          复制 "Hello, World!"
        </button>

        <button
          onClick={() => handleCopy('这是中文文本 👋')}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          复制中文文本
        </button>

        <button
          onClick={() => handleCopy('https://www.browseract.com')}
          className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          复制链接
        </button>
      </div>

      {result && (
        <div
          className={`rounded p-4 ${
            result.success
              ? 'border border-green-200 bg-green-50 text-green-800'
              : 'border border-red-200 bg-red-50 text-red-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{result.success ? '✅' : '❌'}</span>
            <span className="font-semibold">
              {result.success ? '复制成功！' : '复制失败'}
            </span>
          </div>
          {result.error && (
            <div className="mt-2 text-sm">错误: {result.error.message}</div>
          )}
        </div>
      )}

      <div className="mt-6 rounded bg-gray-50 p-4">
        <h4 className="mb-2 font-semibold">代码示例：</h4>
        <pre className="overflow-x-auto text-sm">
          <code>{`import { copyText } from 'browseract-ui/client';

const result = await copyText('Hello, World!');

if (result.success) {
  console.log('复制成功');
} else {
  console.error('复制失败:', result.error);
}`}</code>
        </pre>
      </div>
    </div>
  );
}

/**
 * ## 基础用法
 *
 * 点击按钮复制预设文本到剪贴板。
 */
export const BasicUsage: Story = {
  render: () => <BasicUsageDemo />,
};

// 辅助组件：自定义文本 Demo
function CustomTextDemo() {
  const [text, setText] = useState('Hello, BrowserAct!');
  const [result, setResult] = useState<CopyResult | null>(null);

  const handleCopy = async () => {
    const res = await copyText(text);
    setResult(res);
    setTimeout(() => setResult(null), 3000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">
          输入要复制的文本：
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="resize-vertical min-h-[100px] w-full rounded border p-3"
          placeholder="输入任意文本..."
        />
      </div>

      <button
        onClick={handleCopy}
        className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
      >
        复制文本
      </button>

      {result && (
        <div
          className={`rounded p-4 ${
            result.success
              ? 'border border-green-200 bg-green-50 text-green-800'
              : 'border border-red-200 bg-red-50 text-red-800'
          }`}
        >
          {result.success
            ? '✅ 复制成功！'
            : `❌ 复制失败: ${result.error?.message}`}
        </div>
      )}
    </div>
  );
}

/**
 * ## 自定义文本
 *
 * 输入任意文本并复制。
 */
export const CustomText: Story = {
  render: () => <CustomTextDemo />,
};

// 辅助组件：实际应用 Demo
function RealWorldExampleDemo() {
  const [copied, setCopied] = useState(false);
  const shareUrl = 'https://www.browseract.com/share/12345';

  const handleShare = async () => {
    const result = await copyText(shareUrl);
    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const codeExample = `'use client';

import { useState } from 'react';
import { copyText } from 'browseract-ui/client';

export function ShareButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const result = await copyText(url);
    
    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={copied ? 'bg-green-500' : 'bg-blue-500'}
    >
      {copied ? '已复制 ✓' : '分享链接'}
    </button>
  );
}`;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-semibold">ShareButton 组件</h3>
        <div className="rounded border bg-gray-50 p-6">
          <p className="mb-4 text-sm text-gray-600">链接: {shareUrl}</p>
          <button
            onClick={handleShare}
            className={`rounded px-6 py-3 font-medium transition-colors ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {copied ? '已复制 ✓' : '分享链接'}
          </button>
        </div>
      </div>

      <div>
        <h4 className="mb-2 font-semibold">完整代码：</h4>
        <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
          <code>{codeExample}</code>
        </pre>
      </div>
    </div>
  );
}

/**
 * ## 实际应用示例
 *
 * 在 React 组件中的完整使用示例。
 */
export const RealWorldExample: Story = {
  render: () => <RealWorldExampleDemo />,
};

/**
 * ## API 参考
 */
export const APIReference: Story = {
  render: () => (
    <div className="prose prose-sm max-w-none">
      <h3>函数签名</h3>
      <pre className="rounded bg-gray-100 p-3">
        <code>{`async function copyText(text: string): Promise<CopyResult>`}</code>
      </pre>

      <h3 className="mt-4">参数</h3>
      <table className="min-w-full border">
        <thead className="bg-gray-50">
          <tr>
            <th className="border px-3 py-2 text-left">参数</th>
            <th className="border px-3 py-2 text-left">类型</th>
            <th className="border px-3 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2 font-mono">text</td>
            <td className="border px-3 py-2 font-mono">string</td>
            <td className="border px-3 py-2">要复制的文本内容</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-4">返回值</h3>
      <p>
        <code>Promise&lt;CopyResult&gt;</code>
      </p>
      <pre className="rounded bg-gray-100 p-3">
        <code>{`interface CopyResult {
  success: boolean;  // 是否成功
  error?: Error;     // 错误信息（失败时）
}`}</code>
      </pre>

      <h3 className="mt-4">浏览器兼容性</h3>
      <div className="rounded border border-blue-200 bg-blue-50 p-4">
        <p>
          <strong>现代浏览器（Clipboard API）:</strong>
        </p>
        <ul>
          <li>Chrome 63+</li>
          <li>Firefox 53+</li>
          <li>Safari 13.1+</li>
          <li>Edge 79+</li>
        </ul>
        <p className="mt-2">
          <strong>旧版浏览器（execCommand 降级）:</strong>
        </p>
        <ul>
          <li>IE 9+</li>
          <li>Safari 10+</li>
          <li>所有支持 execCommand 的浏览器</li>
        </ul>
      </div>

      <h3 className="mt-4">注意事项</h3>
      <div className="rounded border border-yellow-200 bg-yellow-50 p-4">
        <ul>
          <li>
            ⚠️ <strong>HTTPS:</strong> Clipboard API 只在 HTTPS 或 localhost
            下可用
          </li>
          <li>
            ⚠️ <strong>权限:</strong> 某些浏览器可能需要用户授权
          </li>
          <li>
            ⚠️ <strong>交互:</strong> 建议在用户交互事件中调用
          </li>
          <li>
            ⚠️ <strong>Next.js:</strong> 必须在 Client Component 中使用
          </li>
        </ul>
      </div>
    </div>
  ),
};
