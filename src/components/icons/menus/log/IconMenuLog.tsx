import { baseIconConfigs } from '../../constants';

export interface IconMenuLogProps extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}

export function IconMenuLog({ active = false, ...rest }: IconMenuLogProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <title>Menu Log</title>

      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        fillRule="evenodd"
        d="M14.454 12.938a.25.25 0 0 0 .273-.25V2.555a.25.25 0 0 0-.222-.248q-2.572-.266-4.327.024-1.348.224-2.215.776-.85-.516-2.14-.73-1.756-.29-4.328-.023a.25.25 0 0 0-.222.247v10.133c0 .149.124.265.273.25q2.538-.259 4.276.03.888.146 1.63.678c.09.125.291.173.433.078q.237-.16.517-.281l.002-.001q.08-.035.165-.066.693-.303 1.609-.455 1.738-.288 4.276-.03m-7.05-9v8.555q-.667-.342-1.418-.466-1.573-.26-3.713-.11v-8.63q1.993-.153 3.386.077 1.071.178 1.745.573m1.185 8.402q.648-.23 1.425-.36 1.573-.26 3.713-.109v-8.63q-1.993-.154-3.386.077-1.071.177-1.745.573z"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3.2"
        height="1"
        x="3.334"
        y="5.619"
        rx=".25"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3.2"
        height="1"
        x="3.334"
        y="7.782"
        rx=".25"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3.2"
        height="1"
        x="12.666"
        y="5.573"
        rx=".25"
        transform="matrix(-1 0 0 1 25.331 0)"
      />
      <rect
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3.2"
        height="1"
        x="12.666"
        y="7.736"
        rx=".25"
        transform="matrix(-1 0 0 1 25.331 0)"
      />
    </svg>
  );
}
