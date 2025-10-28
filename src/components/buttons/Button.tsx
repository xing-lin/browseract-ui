import React, { forwardRef } from 'react';
import { IconLoading } from '../icons/solos/loading/IconLoading';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './button.types';
import styles from './button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'default',
      size = 'middle',
      shape = 'default',
      danger = false,
      ghost = false,
      loading = false,
      disabled = false,
      children,
      onClick,
      icon,
      iconPosition = 'start',
      block = false,
      className,
      ...props
    },
    ref,
  ) => {
    const onlyIcon = !children && icon;
    // text 和 link 类型不支持 ghost 和 block（因为它们本身就是无边框/透明背景）
    const isTextOrLink = type === 'text' || type === 'link';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const classes = cn(
      styles['btn-base'],
      // type classes
      {
        [styles['btn-default']]: type === 'default',
        [styles['btn-primary']]: type === 'primary',
        [styles['btn-dashed']]: type === 'dashed',
        [styles['btn-text']]: type === 'text',
        [styles['btn-link']]: type === 'link',
      },
      // size classes
      {
        [styles['btn-size-small']]: size === 'small',
        [styles['btn-size-middle']]: size === 'middle',
        [styles['btn-size-large']]: size === 'large',
      },
      // shape classes (不适用于 text/link)
      {
        [styles['btn-shape-default']]: !isTextOrLink && shape === 'default',
        [styles['btn-shape-round']]: !isTextOrLink && shape === 'round',
        [styles['btn-shape-circle']]: !isTextOrLink && shape === 'circle',
      },
      // only icon classes
      onlyIcon && styles['btn-only-icon'],
      // danger classes
      danger && styles['btn-danger'],
      // ghost classes (不适用于 text/link)
      ghost && !isTextOrLink && styles['btn-ghost'],
      // block classes (不适用于 text/link)
      block && !isTextOrLink && styles['btn-block'],
      // loading classes
      loading && styles['btn-loading'],
      className,
    );

    const iconElement = loading ? <IconLoading /> : icon;

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {iconPosition === 'start' ? (
          <>
            {iconElement}
            {children}
          </>
        ) : (
          <>
            {children}
            {iconElement}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
