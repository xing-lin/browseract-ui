import { baseIconConfigs } from '../../constants';
import { IconActiveProps } from '../../types';

export function IconDuoEye({ active = false, ...rest }: IconActiveProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        fillRule="evenodd"
        d="M.814 7.699q-.04.068-.06.145T.734 8q0 .08.02.156.02.077.06.145Q3.973 13.743 8 13.743T15.186 8.3q.04-.068.06-.145t.02-.156q0-.08-.02-.156-.02-.077-.06-.145Q12.027 2.257 8 2.257T.814 7.7M2.03 8Q4.77 12.543 8 12.543T13.97 8Q11.23 3.457 8 3.457T2.03 8"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        fillRule="evenodd"
        d="M6.397 6.397Q5.733 7.061 5.733 8t.664 1.603T8 10.267t1.603-.664T10.267 8t-.664-1.603T8 5.733t-1.603.664m.849 2.357Q6.933 8.442 6.933 8t.313-.754q.312-.313.754-.313t.754.313.313.754-.313.754q-.312.313-.754.313t-.754-.313"
      />
    </svg>
  );
}
