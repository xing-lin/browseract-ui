import { baseIconConfigs } from '../constants';
import { IconActiveProps } from '../types';

export function IconDislike({ active = false, ...restProps }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...restProps}
    >
      <g transform="matrix(-1 0 0 -1 32 32)">
        <path
          data-hover="black"
          fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
          d="M19.5 23.48q.002-.206.002-.459a.46.46 0 0 0-.466-.456h-.004l-.947.002a.608.608 0 0 0-.678.606l-.005 6.623c0 .338.265.603.604.603h.026l.032.001.028-.001h.953-.001l.059-.002v-.006a.44.44 0 0 0 .369-.435v-.446h-.37.376zh-.456z"
        />
        <path
          data-hover="green"
          fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
          d="M30.347 22.817c-.284-.463-.706-.7-1.284-.724a1 1 0 0 0-.09-.006l-3.06-.01c.21-.63.325-1.309.325-1.918a6 6 0 0 0-.14-1.274l-.018-.05h-.001a1.64 1.64 0 0 0-1.588-1.238c-.866 0-1.519.722-1.519 1.68v.048c-.002.035-.002.07 0 .097-.043 1.589-1.31 2.928-2.946 3.114l-.052.006-.012 4.288v3.57h.217l.01.002h.05V30.4l7.588.003.135-.003c.31 0 .485-.08.76-.256a1.67 1.67 0 0 0 .59-.661.6.6 0 0 0 .087-.191l1.177-5.26a.6.6 0 0 0 .018-.197 1.7 1.7 0 0 0-.247-1.018"
        />
      </g>
    </svg>
  );
}
