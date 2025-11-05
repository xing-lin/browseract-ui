import { baseIconConfigs } from '../../constants';

export function IconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 9 9"
      {...props}
    >
      <path d="m0 4.5 2.424.864a2 2 0 0 1 1.212 1.212L4.5 9l.864-2.424a2 2 0 0 1 1.212-1.212L9 4.5l-2.424-.864a2 2 0 0 1-1.212-1.212L4.5 0l-.864 2.424a2 2 0 0 1-1.212 1.212z" />
    </svg>
  );
}
