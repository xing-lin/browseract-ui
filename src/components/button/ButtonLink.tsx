import { Button, type ButtonProps } from '@/_shadcn/components/ui/button';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export interface ButtonLinkProps
  extends Omit<ComponentProps<typeof Link>, 'className' | 'children'>,
    Pick<ButtonProps, 'variant' | 'size' | 'className'> {
  href: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,

  ...linkProps
}: ButtonLinkProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <Link
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
    </Button>
  );
}
