import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoPlay({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M8 15c-.945 0-1.86-.186-2.725-.55a7 7 0 0 1-2.225-1.5 7 7 0 0 1-1.5-2.225A7 7 0 0 1 1 8c0-.945.186-1.86.55-2.725a7 7 0 0 1 1.5-2.225 7 7 0 0 1 2.225-1.5A7 7 0 0 1 8 1c.945 0 1.86.186 2.725.55a7 7 0 0 1 2.225 1.5 7 7 0 0 1 1.5 2.225c.364.862.55 1.78.55 2.725s-.186 1.86-.55 2.725a7 7 0 0 1-1.5 2.225 7 7 0 0 1-2.225 1.5c-.862.364-1.78.55-2.725.55M8 2.377A5.63 5.63 0 0 0 2.377 8 5.63 5.63 0 0 0 8 13.623 5.63 5.63 0 0 0 13.623 8 5.63 5.63 0 0 0 8 2.377"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="m6.46 10.861 4.592-2.976L6.46 4.907z"
      />
    </svg>
  );
}
