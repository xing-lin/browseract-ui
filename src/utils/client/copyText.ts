/**
 * 复制相关工具函数
 * @module utils/client/copy
 */

/**
 * 复制结果
 */
export interface CopyResult {
  success: boolean;
  error?: Error;
}

/**
 * 复制文本到剪贴板
 *
 * 优先使用现代的 Clipboard API，如果不支持则降级到 execCommand
 *
 * @param text - 要复制的文本
 * @returns Promise<CopyResult> 复制结果
 *
 * @example
 * ```typescript
 * const result = await copyText('Hello World');
 * if (result.success) {
 *   console.log('Copy successful');
 * } else {
 *   console.error('Copy failed', result.error);
 * }
 * ```
 */
export async function copyText(text: string): Promise<CopyResult> {
  try {
    // 优先使用现代 Clipboard API
    if (typeof navigator !== 'undefined' && navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return { success: true };
    }

    // 降级到 execCommand（已废弃但兼容性好）
    if (typeof document !== 'undefined') {
      return fallbackCopy(text);
    }

    throw new Error(
      'Copy functionality is not supported in current environment',
    );
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}

/**
 * 降级复制方法（使用 execCommand）
 * @internal
 */
function fallbackCopy(text: string): CopyResult {
  let textarea: HTMLTextAreaElement | null = null;

  try {
    // 创建临时 textarea
    textarea = document.createElement('textarea');
    textarea.value = text;

    // 设置样式使其不可见但可选中
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    textarea.setAttribute('readonly', '');

    document.body.appendChild(textarea);

    // iOS Safari 需要特殊处理
    const isIOS = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase());
    if (isIOS) {
      const range = document.createRange();
      range.selectNodeContents(textarea);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      textarea.setSelectionRange(0, text.length);
    } else {
      textarea.select();
    }

    // 执行复制
    const successful = document.execCommand('copy');

    if (!successful) {
      throw new Error('execCommand failed to execute');
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  } finally {
    // 清理
    if (textarea && textarea.parentNode) {
      textarea.parentNode.removeChild(textarea);
    }
  }
}
