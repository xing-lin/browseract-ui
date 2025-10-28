import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import { Button } from '../src/components/buttons/Button';
import {
  IconPlus,
  IconDelete,
  IconSetting,
  IconLoading,
} from '../src/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          BrowserAct UI Components - Playground
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Button 组件示例
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                按钮类型
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button type="primary">Primary</Button>
                <Button type="default">Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="text">Text</Button>
                <Button type="link">Link</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                按钮尺寸
              </h3>
              <div className="flex items-center gap-4">
                <Button size="small">Small</Button>
                <Button size="middle">Middle</Button>
                <Button size="large">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                带图标的按钮
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button icon={<IconPlus />}>添加</Button>
                <Button
                  icon={<IconSetting />}
                  type="primary"
                >
                  设置
                </Button>
                <Button
                  icon={<IconDelete />}
                  danger
                >
                  删除
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                加载状态
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button loading>Loading</Button>
                <Button
                  loading
                  type="primary"
                >
                  Primary Loading
                </Button>
                <Button
                  loading
                  danger
                >
                  Danger Loading
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                禁用状态
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button
                  disabled
                  type="primary"
                >
                  Disabled Primary
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                危险按钮
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button danger>Danger</Button>
                <Button
                  danger
                  type="primary"
                >
                  Danger Primary
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                块级按钮
              </h3>
              <div className="space-y-2">
                <Button block>Block Button</Button>
                <Button
                  block
                  type="primary"
                >
                  Block Primary
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                按钮形状
              </h3>
              <div className="flex items-center gap-4">
                <Button shape="default">Default</Button>
                <Button shape="round">Round</Button>
                <Button
                  shape="circle"
                  icon={<IconPlus />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">图标示例</h2>
          <div className="flex gap-4 text-2xl">
            <IconPlus />
            <IconDelete />
            <IconSetting />
            <IconLoading className="animate-spin" />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
);
