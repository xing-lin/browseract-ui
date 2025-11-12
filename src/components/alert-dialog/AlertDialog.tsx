import {
  AlertDialog as AlertDialogUI,
  AlertDialogTrigger as AlertDialogTriggerUI,
  AlertDialogContent as AlertDialogContentUI,
  AlertDialogHeader as AlertDialogHeaderUI,
  AlertDialogFooter as AlertDialogFooterUI,
  AlertDialogTitle as AlertDialogTitleUI,
  AlertDialogDescription as AlertDialogDescriptionUI,
  AlertDialogAction as AlertDialogActionUI,
  AlertDialogCancel as AlertDialogCancelUI,
} from '../ui/alert-dialog';
import { ButtonProps } from '../buttons/button.types';
import { BaseDialogComponent, BaseDialogProps } from '../dialog/BaseDialog';

export type AlertDialogProps = Omit<
  BaseDialogProps,
  'onClose' | 'showCloseButton'
>;

export function AlertDialog({
  confirmButtonProps,
  cancelButtonProps,
  onlyConfirmButton = false,
  width = 600,
  status = 'default',
  ...props
}: AlertDialogProps & {
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onlyConfirmButton?: boolean;
}) {
  return (
    <BaseDialogComponent
      {...props}
      confirmButtonProps={confirmButtonProps}
      cancelButtonProps={cancelButtonProps}
      onlyConfirmButton={onlyConfirmButton}
      width={width}
      status={status}
      type="alert-dialog"
      primitives={{
        Root: AlertDialogUI,
        Trigger: AlertDialogTriggerUI,
        Content: AlertDialogContentUI,
        Header: AlertDialogHeaderUI,
        Footer: AlertDialogFooterUI,
        Title: AlertDialogTitleUI,
        Description: AlertDialogDescriptionUI,
        Action: AlertDialogActionUI,
        Cancel: AlertDialogCancelUI,
      }}
    />
  );
}
