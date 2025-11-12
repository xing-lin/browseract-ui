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
import { ButtonProps } from '../buttons/button.types';
import { BaseDialogComponent, BaseDialogProps } from './BaseDialog';

export interface DialogProps extends Omit<BaseDialogProps, 'onCancel'> {
  showCloseButton?: boolean;
}

export function Dialog({
  showCloseButton = true,
  confirmButtonProps,
  cancelButtonProps,
  width = 600,
  status = 'default',
  onlyConfirmButton = false,
  ...props
}: DialogProps & {
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onlyConfirmButton?: boolean;
}) {
  return (
    <BaseDialogComponent
      {...props}
      showCloseButton={showCloseButton}
      confirmButtonProps={confirmButtonProps}
      cancelButtonProps={cancelButtonProps}
      onlyConfirmButton={onlyConfirmButton}
      width={width}
      status={status}
      type="dialog"
      primitives={{
        Root: DialogUI,
        Trigger: DialogTriggerUI,
        Content: DialogContentUI,
        Header: DialogHeaderUI,
        Footer: DialogFooterUI,
        Title: DialogTitleUI,
        Description: DialogDescriptionUI,
        Close: DialogCloseUI,
      }}
    />
  );
}
