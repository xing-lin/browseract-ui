import { baseIconConfigs } from '../../constants';

export function IconGuideBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 12 12"
      {...props}
    >
      <path d="M10 11H3.25A1.75 1.75 0 0 1 1.5 9.25V2.5A1.5 1.5 0 0 1 3 1h7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5m-.5-1V8.5H3.25a.75.75 0 1 0 0 1.5zM5 2v4l1.75-1L8.5 6V2z" />
    </svg>
  );
}
