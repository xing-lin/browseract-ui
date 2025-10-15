import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconMenuIntegration({
  active = false,
  ...rest
}: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M2 4.5a2.5 2.5 0 0 1 5 0v2a.5.5 0 0 1-.5.5h-2A2.5 2.5 0 0 1 2 4.5Z"
      />
      <path
        data-hover="green"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="M9 4.5a2.5 2.5 0 0 1 5 0A2.5 2.5 0 0 1 11.5 7h-2a.5.5 0 0 1-.5-.5Z"
      />
      <path
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M2 11.5A2.5 2.5 0 0 1 4.5 9h2a.5.5 0 0 1 .5.5v2a2.5 2.5 0 0 1-5 0ZM9 9.5a.5.5 0 0 1 .5-.5h2a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 9 11.5Z"
      />
    </svg>
  );
}
