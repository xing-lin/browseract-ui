import type { ComponentProps } from 'react';

/**
 * Mock for next/link
 * Used in test environment to avoid Next.js dependency
 */
export default function Link({
  href,
  children,
  ...props
}: ComponentProps<'a'> & { href: string }) {
  return (
    <a
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
