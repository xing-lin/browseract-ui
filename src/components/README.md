# Components

此目录下**仅包含服务端组件**（Server Components）。

## 说明

- ✅ **服务端组件**：放在此目录下，默认导出
- ❌ **客户端组件**：应放在 `src/client/components` 目录下（如果将来需要）

## 当前组件

- `icons/` - 图标组件集合（服务端组件）

## 使用方式

### 默认导出（推荐）

```typescript
import { IconApiAutomation, IconChain } from 'browseract-ui';
```

## 注意事项

- 所有放在此目录下的组件都应该可以在 Next.js 服务端组件中直接使用
- 组件不应依赖浏览器 API（如 `window`、`document`、`navigator` 等）
- 组件不应使用 React Hooks（如 `useState`、`useEffect` 等），除非是纯函数组件
