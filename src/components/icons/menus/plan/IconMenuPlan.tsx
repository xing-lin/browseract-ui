import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconMenuPlan({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <title>Menu Plan</title>

      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="M4.863 4.5h5.793v1H4.863zm0 3h5.793v1H4.863zm0 3h5.793v1H4.863z"
      />
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M15 8c0-.928-.617-1.705-1.448-1.928V3c0-.827-.65-1.5-1.449-1.5H3.414c-.798 0-1.448.673-1.448 1.5v2.5H1v1h.966v3H1v1h.966V13c0 .827.65 1.5 1.448 1.5h8.69c.798 0 1.448-.673 1.448-1.5V9.928C14.382 9.705 15 8.928 15 8m-2.897 5.5H3.414a.493.493 0 0 1-.483-.5v-2.5h.966v-1H2.93v-3h.966v-1H2.93V3c0-.275.216-.5.483-.5h8.69c.265 0 .482.225.482.5v3.072c-.831.223-1.449 1-1.449 1.928s.618 1.705 1.449 1.928V13c0 .275-.216.5-.483.5M13.07 9c-.533 0-.966-.448-.966-1s.433-1 .966-1 .965.448.965 1-.432 1-.965 1"
      />
    </svg>
  );
}
