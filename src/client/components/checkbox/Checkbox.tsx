'use client';

import * as React from 'react';
import { Checkbox as ShadcnCheckbox } from '@/_shadcn/components/ui/checkbox';
import { Label } from '@/_shadcn/components/ui/label';
import type * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@/utils';

/**
 * Checkbox 组件的属性
 */
export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * 子元素（标签内容）
   * 如果提供了 children，会自动用 Label 组件包裹
   */
  children?: React.ReactNode;
  /**
   * 容器类名
   * 用于自定义包裹 checkbox 和 label 的容器样式
   */
  containerClassName?: string;
}

/**
 * Checkbox 组件
 *
 * 基于 shadcn/ui Checkbox 组件，提供复选框功能。
 *
 * @example
 * ```tsx
 * // 基础用法
 * <Checkbox />
 *
 * // 受控组件
 * const [checked, setChecked] = useState(false);
 * <Checkbox checked={checked} onCheckedChange={setChecked} />
 *
 * // 带 children
 * <Checkbox id="terms">接受条款</Checkbox>
 *
 * // 禁用状态
 * <Checkbox disabled />
 * <Checkbox checked disabled />
 * ```
 */
export function Checkbox({
  className,
  children,
  id,
  containerClassName,
  ...props
}: CheckboxProps) {
  // 生成唯一的 id（如果没有提供且需要 children）
  const autoId = React.useId();
  // 当有 children 时，确保 id 总是存在（用于 Label 的 htmlFor）
  const finalId = id ?? (children ? autoId : undefined);

  const checkbox = (
    <ShadcnCheckbox
      id={finalId}
      className={className}
      {...props}
    />
  );

  // 如果没有 children，直接返回 checkbox
  if (!children) {
    return checkbox;
  }

  // 有 children 时，用容器包裹 checkbox 和 label
  return (
    <div className={cn('flex items-center gap-2', containerClassName)}>
      {checkbox}
      <Label
        htmlFor={finalId}
        className="cursor-pointer"
      >
        {children}
      </Label>
    </div>
  );
}
