'use client';

import * as React from 'react';
import { Switch as ShadcnSwitch } from '@/_shadcn/components/ui/switch';
import { Label } from '@/_shadcn/components/ui/label';
import { cn } from '@/utils';

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnSwitch> {
  /**
   * Switch 的标签内容
   * 如果提供了 children，会使用 Label 包裹 Switch 和 children
   */
  children?: React.ReactNode;

  /**
   * 容器的自定义 className
   * 只在有 children 时生效
   */
  containerClassName?: string;
}

/**
 * Switch 组件
 *
 * 基于 shadcn/ui Switch 组件，提供简化的使用方式。
 *
 * @example
 * ```tsx
 * // 基础用法（无标签）
 * <Switch />
 *
 * // 带标签
 * <Switch>Enable notifications</Switch>
 *
 * // 受控模式
 * const [enabled, setEnabled] = useState(false);
 * <Switch checked={enabled} onCheckedChange={setEnabled}>
 *   Airplane mode
 * </Switch>
 *
 * // 禁用状态
 * <Switch disabled>Disabled option</Switch>
 *
 * // 自定义容器样式
 * <Switch containerClassName="justify-between">
 *   Marketing emails
 * </Switch>
 * ```
 */
export function Switch({
  children,
  className,
  id,
  containerClassName,
  ...props
}: SwitchProps) {
  // 生成唯一的 id（如果没有提供且需要 children）
  const autoId = React.useId();
  // 当有 children 时，确保 id 总是存在（用于 Label 的 htmlFor）
  const finalId = id ?? (children ? autoId : undefined);

  const switchElement = (
    <ShadcnSwitch
      id={finalId}
      className={className}
      {...props}
    />
  );

  // 如果没有 children，直接返回 switch
  if (!children) {
    return switchElement;
  }

  // 有 children 时，用 Label 包裹
  return (
    <div className={cn('flex items-center gap-2', containerClassName)}>
      {switchElement}
      <Label
        htmlFor={finalId}
        className="cursor-pointer"
      >
        {children}
      </Label>
    </div>
  );
}
