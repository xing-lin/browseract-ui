import {
  Tooltip as TooltipUI,
  TooltipTrigger as TooltipTriggerUI,
  TooltipContent as TooltipContentUI,
} from '../ui/tooltip';
import { cn } from '@/utils';

export interface TooltipProps {
  children: React.ReactNode | string;
  content: React.ReactNode | string;
  triggerClassName?: string;
  contentClassName?: string;
  align: 'start' | 'center' | 'end';
  side: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  container?: HTMLElement | null;
  contentMaxWidth?: string | number | 'fit-content';
}

export function Tooltip({
  children,
  content,
  contentClassName,
  triggerClassName,
  align = 'center',
  side = 'top',
  open,
  onOpenChange,
  defaultOpen,
  container,
  contentMaxWidth = 250,
}: TooltipProps) {
  return (
    <TooltipUI
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      <TooltipTriggerUI
        asChild
        className={triggerClassName}
      >
        {typeof children === 'string' ? <span>{children}</span> : children}
      </TooltipTriggerUI>
      <TooltipContentUI
        className={cn(
          'bg-(--tooltip-bg) text-(--tooltip-text) [&_svg]:fill-(--tooltip-bg)',
          contentClassName,
        )}
        sideOffset={5}
        align={align}
        side={side}
        container={container}
        style={{ maxWidth: contentMaxWidth }}
      >
        {typeof content === 'string' ? <span>{content}</span> : content}
      </TooltipContentUI>
    </TooltipUI>
  );
}
