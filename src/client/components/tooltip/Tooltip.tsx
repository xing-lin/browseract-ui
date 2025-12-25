'use client';

import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/_shadcn/components/ui/tooltip';

export interface TooltipProps {
  /**
   * Tooltip 显示的内容
   */
  content: React.ReactNode;

  /**
   * 触发 Tooltip 的子元素
   */
  children: React.ReactElement;

  /**
   * Tooltip 相对于触发器的位置
   * @default 'top'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Tooltip 与触发器的距离（像素）
   * @default 4
   */
  sideOffset?: number;

  /**
   * 延迟显示时间（毫秒）
   * @default 0
   */
  delayDuration?: number;

  /**
   * 是否禁用 Tooltip
   * @default false
   */
  disabled?: boolean;

  /**
   * 自定义 Tooltip 内容的 className
   */
  contentClassName?: string;

  /**
   * 是否在触发器元素被禁用时仍显示 Tooltip
   * @default true
   */
  disableHoverableContent?: boolean;

  /**
   * 是否一直显示 Tooltip（受控模式）
   * - 如果为 true，Tooltip 会一直显示
   * - 如果为 false，Tooltip 会一直隐藏
   * - 如果为 undefined，Tooltip 会根据用户交互显示/隐藏（默认行为）
   */
  open?: boolean;

  /**
   * Tooltip 显示状态改变时的回调
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * 默认是否显示 Tooltip（非受控模式）
   * @default false
   */
  defaultOpen?: boolean;
}

/**
 * Tooltip 组件
 *
 * 基于 shadcn/ui Tooltip 组件，提供简化的数据驱动方式使用。
 *
 * @example
 * ```tsx
 * // 基础用法
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // 指定位置
 * <Tooltip content="Bottom tooltip" side="bottom">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // 自定义内容
 * <Tooltip content={<div><strong>Bold</strong> content</div>}>
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // 禁用状态
 * <Tooltip content="Disabled tooltip" disabled>
 *   <button>No tooltip</button>
 * </Tooltip>
 *
 * // 一直显示（受控模式）
 * <Tooltip content="Always visible" open={true}>
 *   <button>Always shows tooltip</button>
 * </Tooltip>
 *
 * // 受控模式
 * const [open, setOpen] = useState(false);
 * <Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
 *   <button>Controlled</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  content,
  children,
  side = 'top',
  sideOffset = 4,
  delayDuration = 0,
  disabled = false,
  contentClassName,
  disableHoverableContent = false,
  open,
  onOpenChange,
  defaultOpen = false,
}: TooltipProps) {
  // 如果禁用或内容为空，直接返回子元素
  if (disabled || !content) {
    return children;
  }

  return (
    <ShadcnTooltip
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        className={contentClassName}
      >
        {content}
      </TooltipContent>
    </ShadcnTooltip>
  );
}
