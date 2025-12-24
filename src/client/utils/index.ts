'use client';

/**
 * 客户端专用工具函数
 * 这些函数需要在浏览器环境中运行，不支持 SSR
 *
 * @module client/utils
 *
 * @example
 * ```typescript
 * // 在 Next.js 中使用
 * 'use client';
 *
 * import { copyText } from 'browseract-ui/client';
 *
 * export function MyComponent() {
 *   const handleCopy = () => {
 *     copyText('Hello, world!');
 *   };
 *   return (
 *     <button onClick={handleCopy}>Copy</button>
 *   );
 * }
 * ```
 */

export * from './copyText';
