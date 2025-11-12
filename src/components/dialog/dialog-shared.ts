import { cn } from '@/utils';

/**
 * Dialog 共享样式配置
 */
export const dialogStyles = {
  /**
   * Content 容器样式
   */
  content: (contentClassName?: string) =>
    cn(
      'flex max-h-[88vh] max-w-[calc(100%-2rem)] flex-col gap-0 border-0 bg-(--dialog-content-bg) py-(--dialog-content-padding-y) pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left) sm:max-w-(--dialog-width)',
      contentClassName,
    ),

  /**
   * Header 容器样式
   */
  header: (headerClassName?: string) => cn('mb-4 shrink-0', headerClassName),

  /**
   * Title 样式
   */
  title: (titleClassName?: string) =>
    cn('pr-8 text-base font-bold text-(--color-text)', titleClassName),

  /**
   * Description 样式
   */
  description: (descriptionClassName?: string) =>
    cn('text-sm text-(--color-text-secondary)', descriptionClassName),

  /**
   * 内容区域滚动样式
   */
  scrollArea:
    '-mr-(--dialog-content-padding-x-right) mb-6 -ml-(--dialog-content-padding-x-left) w-[calc(100%+var(--dialog-content-padding-x-left)+var(--dialog-content-padding-x-right))] flex-1 overflow-y-auto pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left) text-(--color-text)',

  /**
   * Footer divider 样式
   */
  footerDivider:
    '-mr-(--dialog-content-padding-x-right) mb-4 -ml-(--dialog-content-padding-x-left) h-px w-[calc(100%+var(--dialog-content-padding-x-left)+var(--dialog-content-padding-x-right))] shrink-0 bg-(--color-border) pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left)',

  /**
   * Footer 容器样式
   */
  footer: (footerClassName?: string) => cn('shrink-0', footerClassName),

  /**
   * Status icon 容器样式
   */
  statusIcon:
    'absolute top-(--dialog-content-padding-y) left-6 grid h-6 place-items-center',
};

/**
 * 获取 Dialog Content 的 CSS 变量
 */
export function getDialogContentStyle(
  width: number,
  status: 'success' | 'warning' | 'error' | 'info' | 'default',
): React.CSSProperties {
  return {
    '--dialog-width': `${width}px`,
    '--dialog-content-padding-x-left': status === 'default' ? '24px' : '58px',
    '--dialog-content-padding-x-right': '24px',
    '--dialog-content-padding-y': '20px',
  } as React.CSSProperties;
}
