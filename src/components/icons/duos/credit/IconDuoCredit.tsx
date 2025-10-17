import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoCredit({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        fillRule="evenodd"
        d="M1.25 16.57V3.43q0-.03.006-.06.006-.031.018-.06t.029-.054q.017-.025.039-.047t.047-.039.054-.029q.028-.011.059-.017t.06-.006h16.876q.03 0 .06.006t.06.017.053.03q.026.016.047.038t.04.047q.016.026.028.054.012.029.018.06t.006.06v13.142q0 .03-.006.06-.006.031-.018.06t-.029.053-.038.048q-.022.022-.048.039t-.054.029q-.028.011-.058.017t-.061.006H1.563q-.031 0-.061-.006t-.06-.017-.053-.03q-.026-.016-.047-.038t-.04-.048q-.016-.025-.028-.054t-.018-.058q-.006-.03-.006-.061m16-1.187H2.75V8.668h14.5zm0-8.215H2.75V4.617h14.5z"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3.811"
        height="1.5"
        x="12"
        y="12"
        rx="0"
      />
    </svg>
  );
}
