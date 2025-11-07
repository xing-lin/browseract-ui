'use client';

import { forwardRef } from 'react';
import { IconLoading } from '../icons/solos/loading/IconLoading';
import { cn } from '@/utils/cn';
import type { ButtonProps } from './button.types';
import styles from './button.module.css';

// 样式映射表
const STYLE_MAP = {
  type: {
    default: styles['btn-default'],
    primary: styles['btn-primary'],
    dashed: styles['btn-dashed'],
    text: styles['btn-text'],
    link: styles['btn-link'],
  },
  size: {
    small: styles['btn-size-small'],
    middle: styles['btn-size-middle'],
    large: styles['btn-size-large'],
  },
  shape: {
    default: styles['btn-shape-default'],
    round: styles['btn-shape-round'],
    circle: styles['btn-shape-circle'],
  },
} as const;

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
      htmlType = 'button',
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
      STYLE_MAP.type[type],
      STYLE_MAP.size[size],
      !isTextOrLink && STYLE_MAP.shape[shape],
      onlyIcon && styles['btn-only-icon'],
      danger && styles['btn-danger'],
      ghost && !isTextOrLink && styles['btn-ghost'],
      block && !isTextOrLink && styles['btn-block'],
      loading && styles['btn-loading'],
      className,
    );

    const iconElement = loading ? <IconLoading /> : icon;

    return (
      <button
        ref={ref}
        type={htmlType}
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
