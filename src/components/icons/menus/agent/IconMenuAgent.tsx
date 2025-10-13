import React from 'react';
import { baseIconConfigs } from '../../constants';

export interface IconMenuAgentProps extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}

export function IconMenuAgent({ active = false, ...rest }: IconMenuAgentProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <title>Menu Agent</title>

      <path
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M14.5 5a.51.51 0 0 0-.25-.42L8.76 1.36a1.53 1.53 0 0 0-1.52 0L1.75 4.57A.51.51 0 0 0 1.5 5v5.43c0 .531.281 1.022.74 1.29l5 2.92c.47.27 1.05.27 1.52 0l5-2.92a1.49 1.49 0 0 0 .74-1.29zm-1 5.44a.5.5 0 0 1-.25.43l-5 2.91a.5.5 0 0 1-.5 0l-5-2.91a.5.5 0 0 1-.25-.43V5.93l2.22 1.49.56-.84L2.94 5l4.81-2.8a.5.5 0 0 1 .5 0L13.06 5l-2.34 1.58.56.84 2.22-1.49z"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="M8 4.5a.51.51 0 0 0-.46.29L5 10.29l.92.42L6.73 9h2.54l.73 1.71.92-.42-2.5-5.5A.51.51 0 0 0 8 4.5M7.19 8 8 6.21 8.81 8z"
      />
    </svg>
  );
}
