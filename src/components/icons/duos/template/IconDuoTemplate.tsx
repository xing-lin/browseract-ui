import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoTemplate({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <rect
        data-hover="green"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="6"
        height="3"
        x="7.5"
        y="10.5"
        rx=".5"
      />
      <rect
        data-hover="green"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3"
        height="4"
        x="4.5"
        y="2.5"
        rx=".5"
      />
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="6"
        height="8"
        x="7.5"
        y="2.5"
        rx=".5"
      />
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="5"
        height="7"
        x="2.5"
        y="6.5"
        rx=".5"
      />
    </svg>
  );
}
