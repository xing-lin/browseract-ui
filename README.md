# BrowserAct UI

BrowserAct React 组件库，基于 Tailwind CSS 和 shadcn/ui 构建，专为 Next.js 应用设计。

## 📦 安装

```bash
npm install browseract-ui
# or
pnpm add browseract-ui
# or
yarn add browseract-ui
```

## 🚀 快速开始

### 1. 在 Next.js 项目中配置 Tailwind CSS

确保你的项目已经安装并配置了 Tailwind CSS v4。

### 2. 导入主题样式

在你的全局 CSS 文件中（通常是 `app/globals.css`）导入 BrowserAct UI 主题：

```css
/* app/globals.css */
@import 'tailwindcss';
@import 'tw-animate-css'; /* 如果需要动画支持 */
@import 'browseract-ui/theme.css';
```

### 3. 使用组件

#### 服务端组件（默认导出）

```tsx
import { IconApiAutomation } from 'browseract-ui';

export default function Page() {
  return <IconApiAutomation />;
}
```

#### 客户端组件

```tsx
'use client';

import { Button } from 'browseract-ui/client';

export default function MyButton() {
  return <Button onClick={() => console.log('clicked')}>Click me</Button>;
}
```

## 📚 组件分类

### 🖥️ 服务端组件（`browseract-ui`）

- **图标**：所有图标组件（`IconApiAutomation`, `IconChain` 等）
- **工具函数**：`cn` 等

### 💻 客户端组件（`browseract-ui/client`）

- **Button**：支持 loading 状态和图标
- **工具函数**：`copyText` 等客户端专用函数

## 🎨 主题定制

所有组件使用 CSS 变量进行主题配置，你可以通过覆盖这些变量来定制主题：

```css
:root {
  --radius: 0.5rem;
  --primary: oklch(0.5 0.2 250);
  --primary-foreground: oklch(1 0 0);
  /* ... 更多变量 */
}
```

查看 `theme.css` 获取完整的变量列表。

## 📖 文档

更多示例和 API 文档，请访问我们的 [Storybook](https://your-storybook-url.com)。

## 🤝 贡献

欢迎贡献！请查看我们的 [贡献指南](CONTRIBUTING.md)。

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。
