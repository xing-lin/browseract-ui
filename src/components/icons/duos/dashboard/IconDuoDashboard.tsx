import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoDashboard({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M17.186 17.502H2.813a.31.31 0 0 1-.313-.312V2.817c0-.173.14-.313.313-.313h.937c.173 0 .313.14.313.313V15.94h13.123c.172 0 .312.14.312.312v.938c0 .173-.14.312-.312.312"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        d="M14.731 13.584c0 .093.078.169.174.169h1.215a.17.17 0 0 0 .174-.169V5.171a.17.17 0 0 0-.174-.168h-1.215a.17.17 0 0 0-.174.168zM11.657 13.657c0 .052.078.096.174.096h1.215c.095 0 .174-.044.174-.096V8.849c0-.053-.079-.096-.174-.096h-1.215c-.096 0-.174.043-.174.096zM8.583 13.632c0 .067.078.12.174.12h1.215c.095 0 .174-.053.174-.12v-6.01c0-.065-.079-.12-.174-.12H8.757c-.096 0-.174.055-.174.12zM5.509 13.693c0 .033.078.06.173.06h1.216c.095 0 .173-.027.173-.06v-2.962c0-.032-.078-.06-.173-.06H5.682c-.095 0-.173.028-.173.06z"
      />
    </svg>
  );
}
