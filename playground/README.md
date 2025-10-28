# Playground

这是一个开发测试目录，用于在真实环境中测试和预览组件。

## 📝 用途

- 用于真实场景下的组件测试和调试
- 补充 Storybook 的单元测试，提供完整的应用上下文
- 快速验证组件的实际使用效果

## 🚀 使用方法

```bash
npm run dev
```

然后访问 `http://localhost:5173` 查看效果。

## ⚠️ 注意事项

- 此目录的文件**不会**被包含在测试覆盖率统计中
- 此目录的文件**不会**被打包到 npm 包中
- 仅用于开发和测试，不影响生产代码

## 📁 文件说明

- `main.tsx` - React 应用入口文件，包含组件示例
- 根目录的 `index.html` 会引用此文件

## 🔧 测试覆盖率配置

在 `vite.config.ts` 中已配置排除此目录：

```typescript
coverage: {
  exclude: [
    'playground/**', // 排除 playground 开发测试文件
    // ...
  ],
}
```
