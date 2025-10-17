import { baseIconConfigs } from '../../constants';

export function IconPlusCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m0-1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" />
      <path d="M4 8.5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z" />
      <path d="M7.5 4a.5.5 0 1 1 1 0v8a.5.5 0 0 1-1 0z" />
    </svg>
  );
}
