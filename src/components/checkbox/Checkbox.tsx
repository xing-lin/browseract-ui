import { forwardRef, useId } from 'react';
import { Checkbox as CheckboxUI } from '../ui/checkbox';
import { cn } from '@/utils';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxUI> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: boolean;
  helperText?: React.ReactNode;
}

export const Checkbox = forwardRef<
  React.ComponentRef<typeof CheckboxUI>,
  CheckboxProps
>(({ label, description, error, helperText, className, ...props }, ref) => {
  const id = useId();
  const checkboxId = props.id || id;
  const helperTextId = `${checkboxId}-helper-text`;

  const defaultCheckboxClassName = cn(
    'mt-0.75',
    // 选中状态
    'data-[state=checked]:bg-(--checkbox-bg-checked) data-[state=checked]:border-(--checkbox-border-checked) data-[state=checked]:text-(--checkbox-text-checked)',
    // 禁用状态
    'disabled:bg-(--checkbox-bg-disabled) disabled:border-(--checkbox-border-disabled) disabled:text-(--checkbox-text-disabled)',
    // 禁用且选中状态（优先级最高）
    'disabled:data-[state=checked]:bg-(--checkbox-bg-disabled-checked) disabled:data-[state=checked]:border-(--checkbox-border-disabled-checked) disabled:data-[state=checked]:text-(--checkbox-text-disabled-checked)',
    'hover:border-(--checkbox-border-checked)',
    className,
  );

  if (!label && !description) {
    // 如果没有 label，返回纯 checkbox
    return (
      <CheckboxUI
        ref={ref}
        className={defaultCheckboxClassName}
        {...props}
      />
    );
  }

  return (
    <div className="group flex items-start gap-2">
      <CheckboxUI
        ref={ref}
        id={checkboxId}
        className={cn(defaultCheckboxClassName)}
        aria-invalid={error}
        aria-describedby={helperText ? helperTextId : undefined}
        {...props}
      />
      {(label || description) && (
        <div className="grid gap-1">
          {label && (
            <label
              htmlFor={checkboxId}
              className="cursor-pointer text-sm/(--line-height-sm) text-(--color-text) group-has-disabled:cursor-not-allowed group-has-disabled:text-(--color-text-disabled)"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm/(--line-height-sm) text-(--color-text-secondary) group-has-disabled:text-(--color-text-disabled)">
              {description}
            </p>
          )}
          {helperText && (
            <p
              id={helperTextId}
              className={`text-sm/(--line-height-sm) ${error ? 'text-destructive' : 'text-(--color-text-secondary)'}`}
            >
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
