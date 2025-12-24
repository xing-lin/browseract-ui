# BrowserAct UI

[![NPM version](https://img.shields.io/npm/v/browseract-ui.svg)](https://www.npmjs.com/package/browseract-ui)
[![License](https://img.shields.io/npm/l/browseract-ui.svg)](https://github.com/xing-lin/browseract-ui/blob/main/LICENSE)

BrowserAct React 组件库，基于 Tailwind CSS v4 和 shadcn/ui 构建，专为 Next.js 应用设计。提供丰富的图标组件、客户端交互组件和完整的主题系统。

## ✨ 特性

- 🎨 **完整的主题系统**：基于 CSS 变量和 OKLCH 色彩空间，支持亮/暗模式
- 🧩 **服务端/客户端组件分离**：优化性能和打包体积
- 📦 **开箱即用**：与 Next.js 15+ 和 Tailwind CSS v4 无缝集成
- 🎯 **TypeScript 支持**：完整的类型定义
- ♿ **可访问性**：遵循 WAI-ARIA 标准
- 📚 **丰富的文档**：完整的 Storybook 文档和示例

## 📦 安装

```bash
npm install browseract-ui
# or
pnpm add browseract-ui
# or
yarn add browseract-ui
```

### 对等依赖

确保你的项目已安装以下依赖：

```json
{
  "react": ">=19",
  "react-dom": ">=19",
  "next": ">=15",
  "tailwindcss": ">=4"
}
```

## 🚀 快速开始

### 1. 配置 Tailwind CSS

确保你的项目已配置 Tailwind CSS v4。

### 2. 导入主题样式

在你的全局 CSS 文件中（如 `app/globals.css`）导入主题：

```css
/* app/globals.css */
@import 'tailwindcss';
@import 'tw-animate-css'; /* 可选：如果需要动画支持 */
@import 'browseract-ui/theme.css';
```

### 3. 配置暗色模式（可选）

在根布局中添加主题切换：

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html className="dark">
      {' '}
      {/* 添加 dark 类启用暗色模式 */}
      <body>{children}</body>
    </html>
  );
}
```

### 4. 使用组件

#### 服务端组件（默认导出）

```tsx
// app/page.tsx
import { IconApiAutomation, IconChain, cn } from 'browseract-ui';

export default function Page() {
  return (
    <div className={cn('flex gap-4')}>
      <IconApiAutomation className="size-6" />
      <IconChain className="text-primary size-6" />
    </div>
  );
}
```

#### 客户端组件

```tsx
// app/components/MyButton.tsx
'use client';

import { Button } from 'browseract-ui/client';
import { IconPlane } from 'browseract-ui';

export default function MyButton() {
  return (
    <Button
      onClick={() => console.log('clicked')}
      loading={false}
    >
      <IconPlane className="size-4" />
      发送
    </Button>
  );
}
```

## 📚 组件分类

### 🖥️ 服务端组件 (`browseract-ui`)

适用于不需要客户端交互的场景，可以在服务端渲染。

#### 图标组件

- **Solo Icons**：单色图标（53 个）
  - 操作类：`IconCheck`, `IconClose`, `IconEdit`, `IconDelete`, `IconCopy` 等
  - 状态类：`IconLoading`, `IconExclamationCircle`, `IconInfoCircle` 等
  - 功能类：`IconSearch`, `IconSetting`, `IconExpand` 等
- **Duo Icons**：双色图标（15 个）
  - `IconAgent`, `IconWorkflow`, `IconDashboard`, `IconIntegration` 等
- **Decor Icons**：装饰图标（3 个）
  - `IconDecorApi`, `IconDecorHot`, `IconDecorMake`

#### 工具函数

```tsx
import { cn } from 'browseract-ui';

// 条件类名合并
const className = cn('base-class', condition && 'conditional-class', 'another-class');
```

### 💻 客户端组件 (`browseract-ui/client`)

需要客户端交互的组件，使用 `'use client'` 指令。

#### Button 组件

```tsx
import { Button } from 'browseract-ui/client';

// 基础用法
<Button variant="default" size="default">按钮</Button>

// 变体
<Button variant="destructive">删除</Button>
<Button variant="outline">轮廓</Button>
<Button variant="ghost">幽灵</Button>
<Button variant="link">链接</Button>

// 尺寸
<Button size="sm">小号</Button>
<Button size="lg">大号</Button>
<Button size="icon"><IconPlane /></Button>

// Loading 状态
<Button loading>加载中...</Button>

// 作为子元素
<Button asChild>
  <a href="/about">关于</a>
</Button>
```

#### ButtonLink 组件（服务端）

```tsx
import { ButtonLink } from 'browseract-ui';

// Next.js Link 按钮样式
<ButtonLink href="/dashboard" variant="default">
  控制台
</ButtonLink>

<ButtonLink href="/docs" variant="outline" target="_blank">
  文档
</ButtonLink>
```

#### 工具函数

```tsx
import { copyText } from 'browseract-ui/client';

// 复制文本到剪贴板
await copyText('要复制的内容');
```

## 🎨 主题定制

### 使用 CSS 变量

所有组件使用 CSS 变量，可轻松自定义：

```css
/* app/globals.css */
@import 'browseract-ui/theme.css';

:root {
  /* 修改基础圆角 */
  --radius: 0.5rem;

  /* 修改主色调（OKLCH 格式）*/
  --primary: oklch(0.6 0.25 250);
  --primary-foreground: oklch(1 0 0);

  /* 修改链接色 */
  --link: oklch(0.55 0.25 260);
}

.dark {
  /* 暗色模式自定义 */
  --primary: oklch(0.8 0.2 250);
  --background: oklch(0.12 0 0);
}
```

### 主题变量列表

- **颜色**：`--primary`, `--secondary`, `--accent`, `--destructive`
- **文本**：`--foreground`, `--foreground-2`, `--foreground-3`, `--foreground-4`
- **背景**：`--background`, `--fill-1`, `--fill-2`, `--fill-3`, `--fill-4`
- **边框**：`--border`, `--divider`, `--ring`
- **圆角**：`--radius`, `--radius-sm`, `--radius-lg`, `--radius-xl` 等
- **链接**：`--link`

查看 [主题文档](https://xing-lin.github.io/components/?path=/docs/设计-主题系统) 了解完整变量列表。

## 📖 文档

- 📚 [Storybook 文档](https://xing-lin.github.io/components/)
- 🎨 [主题系统](https://xing-lin.github.io/components/?path=/docs/设计-主题系统)
- 🖼️ [图标库](https://xing-lin.github.io/components/?path=/docs/设计-图标)
- 📝 [更新日志](https://github.com/xing-lin/browseract-ui/blob/main/CHANGELOG.md)

## 🛠️ 开发

```bash
# 安装依赖
npm install

# 启动 Storybook
npm run storybook

# 运行测试
npm run test

# 测试覆盖率
npm run test:coverage

# 构建
npm run build

# 构建 Storybook
npm run build-storybook
```

## 📦 导出内容

```tsx
// 主入口 (browseract-ui)
import {
  // 所有图标组件
  IconApiAutomation,
  IconChain,
  // ... 更多图标

  // 服务端组件
  ButtonLink,

  // 工具函数
  cn,
} from 'browseract-ui';

// 客户端入口 (browseract-ui/client)
import { Button, copyText, cn } from 'browseract-ui/client';

// 主题样式
import 'browseract-ui/theme.css';
```

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'feat: add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

请确保：

- 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
- 添加适当的测试
- 更新相关文档

## 📄 许可证

MIT License © 2024 [Xing Lin](https://github.com/xing-lin)

查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [GitHub 仓库](https://github.com/xing-lin/browseract-ui)
- [NPM 包](https://www.npmjs.com/package/browseract-ui)
- [问题反馈](https://github.com/xing-lin/browseract-ui/issues)
- [更新日志](https://github.com/xing-lin/browseract-ui/blob/main/CHANGELOG.md)
