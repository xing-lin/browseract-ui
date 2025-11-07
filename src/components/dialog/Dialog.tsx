import * as React from 'react';
import {
  Dialog as DialogUI,
  DialogTrigger as DialogTriggerUI,
  DialogContent as DialogContentUI,
  DialogHeader as DialogHeaderUI,
  DialogFooter as DialogFooterUI,
  DialogTitle as DialogTitleUI,
  DialogDescription as DialogDescriptionUI,
  DialogClose as DialogCloseUI,
} from '../ui/dialog';
import { cn } from '@/utils';
import { Button } from '../buttons/Button';
import { ButtonProps } from '../buttons/button.types';
import { StatusIcon } from '../status/StatusIcon';

export interface DialogProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  showCloseButton?: boolean;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  footerDivider?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  width?: number;
  status?: 'success' | 'warning' | 'error' | 'info' | 'default';
}

export function Dialog({
  children,
  trigger,
  title,
  description,
  footer,
  open,
  onOpenChange,
  defaultOpen,
  showCloseButton = true,
  contentClassName,
  headerClassName,
  footerClassName,
  titleClassName,
  descriptionClassName,
  onConfirm,
  onClose,
  footerDivider,
  confirmButtonProps = {
    type: 'primary',
    children: 'Confirm',
  },
  cancelButtonProps = {
    type: 'default',
    children: 'Cancel',
  },
  width = 600,
  status = 'default',
}: DialogProps & {
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}) {
  return (
    <DialogUI
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      {trigger && <DialogTriggerUI asChild>{trigger}</DialogTriggerUI>}
      <DialogContentUI
        showCloseButton={showCloseButton}
        className={cn(
          'flex max-h-[88vh] max-w-[calc(100%-2rem)] flex-col gap-0 border-0 bg-(--dialog-content-bg) py-(--dialog-content-padding-y) pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left) sm:max-w-(--dialog-width)',
          contentClassName,
        )}
        style={
          {
            '--dialog-width': `${width}px`,
            '--dialog-content-padding-x-left':
              status === 'default' ? '24px' : '58px',
            '--dialog-content-padding-x-right': '24px',
            '--dialog-content-padding-y': '20px',
          } as React.CSSProperties
        }
      >
        {status !== 'default' && (
          <div className="absolute top-(--dialog-content-padding-y) left-6 grid h-6 place-items-center">
            <StatusIcon type={status} />
          </div>
        )}
        {(title || description) && (
          <DialogHeaderUI className={cn('mb-4 shrink-0', headerClassName)}>
            {title && (
              <DialogTitleUI
                className={cn(
                  'pr-8 text-base font-bold text-(--color-text)',
                  titleClassName,
                )}
              >
                {title}
              </DialogTitleUI>
            )}
            {description && (
              <DialogDescriptionUI
                className={cn(
                  'text-sm text-(--color-text-secondary)',
                  descriptionClassName,
                )}
              >
                {description}
              </DialogDescriptionUI>
            )}
          </DialogHeaderUI>
        )}
        <div className="-mr-(--dialog-content-padding-x-right) mb-6 -ml-(--dialog-content-padding-x-left) w-[calc(100%+var(--dialog-content-padding-x-left)+var(--dialog-content-padding-x-right))] flex-1 overflow-y-auto pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left) text-(--color-text)">
          {children}
        </div>
        {footerDivider && (
          <div className="-mr-(--dialog-content-padding-x-right) mb-4 -ml-(--dialog-content-padding-x-left) h-px w-[calc(100%+var(--dialog-content-padding-x-left)+var(--dialog-content-padding-x-right))] shrink-0 bg-(--color-border) pr-(--dialog-content-padding-x-right) pl-(--dialog-content-padding-x-left)" />
        )}
        <DialogFooterUI className={cn('shrink-0', footerClassName)}>
          {footer || (
            <>
              <DialogCloseUI asChild>
                <Button
                  {...cancelButtonProps}
                  onClick={onClose}
                >
                  {cancelButtonProps.children}
                </Button>
              </DialogCloseUI>
              <Button
                {...confirmButtonProps}
                onClick={onConfirm}
              >
                {confirmButtonProps.children}
              </Button>
            </>
          )}
        </DialogFooterUI>
      </DialogContentUI>
    </DialogUI>
  );
}
