import { baseIconConfigs } from '../../constants';

export function IconPlane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="m2.276 6.135 2.907 1.76a.438.438 0 1 1-.453.748L1.086 6.437a.437.437 0 0 1 .058-.778L12.52.91a.438.438 0 0 1 .598.485l-1.993 10.5a.438.438 0 0 1-.664.288L6.766 9.84a.438.438 0 0 1 .468-.74l3.15 1.998 1.722-9.068z" />
      <path d="M5.688 8.642v3.608a.438.438 0 0 1-.875 0V8.44c0-.127.055-.249.153-.332l5.318-4.553a.438.438 0 1 1 .569.665z" />
    </svg>
  );
}
