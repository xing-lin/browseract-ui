import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconMenuHome({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M7.303 1.512 2.228 5.989c-.23.203-.361.494-.361.8v7.078c0 .589.477 1.066 1.066 1.066h10.134c.589 0 1.066-.477 1.066-1.066V6.789c0-.306-.13-.597-.36-.8L8.716 1.514a1.07 1.07 0 0 0-1.412-.001m-4.37 5.277L8.01 2.311l5.058 4.478v7.078H2.933z"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="M6.067 7.533V11H5V7.533a.533.533 0 0 1 1.067 0M9.067 7.533V11H8V7.533a.533.533 0 0 1 1.067 0"
      />
    </svg>
  );
}
