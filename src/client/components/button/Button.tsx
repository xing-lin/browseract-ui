'use client';

import {
  Button as ShadcnButton,
  type ButtonProps as ShadcnButtonProps,
} from '@/_shadcn/components/ui/button';
import { IconLoading } from '@/components/icons/solos/loading/IconLoading';

export interface ButtonProps extends Omit<ShadcnButtonProps, 'loading'> {
  /**
   * 是否显示加载状态
   * 当为 true 时，按钮会显示加载图标并自动禁用
   * 如果提供了 icon，loading 时会替换掉 icon
   */
  loading?: boolean;
  /**
   * 图标元素
   * 可以是任何 React 元素，通常是图标组件或 SVG
   */
  icon?: React.ReactNode;
  /**
   * 图标位置
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
}

/**
 * Button 组件
 *
 * 基于 shadcn/ui Button 组件，增加了 loading 状态和图标支持。
 *
 * @example
 * ```tsx
 * // 基础用法
 * <Button>Click me</Button>
 *
 * // 带 loading 状态
 * <Button loading>Loading...</Button>
 *
 * // 带图标
 * <Button icon={<IconArrowRight />}>Next</Button>
 *
 * // loading 时会替换图标
 * <Button icon={<IconArrowRight />} loading>
 *   Next
 * </Button>
 *
 * // 图标在右侧
 * <Button icon={<IconDownload />} iconPosition="right">
 *   Download
 * </Button>
 * ```
 */
export function Button({
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const loadingIcon = <IconLoading />;

  const renderIcon = (position: 'left' | 'right') => {
    if (loading) {
      return position === iconPosition ? loadingIcon : null;
    }
    return position === iconPosition ? icon : null;
  };

  return (
    <ShadcnButton
      disabled={disabled || loading}
      loading={loading}
      {...props}
    >
      {renderIcon('left')}
      {children}
      {renderIcon('right')}
    </ShadcnButton>
  );
}
