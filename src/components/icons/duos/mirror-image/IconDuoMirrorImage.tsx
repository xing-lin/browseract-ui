import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoMirrorImage({
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
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="4"
        height="9"
        x="2"
        y="3.5"
        rx=".5"
      />
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="4"
        height="9"
        x="10"
        y="3.5"
        rx=".5"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="1"
        height="3"
        x="7.5"
        y="2"
        rx=".5"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="1"
        height="4"
        x="7.5"
        y="6"
        rx=".5"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="1"
        height="3"
        x="7.5"
        y="11"
        rx=".5"
      />
    </svg>
  );
}
