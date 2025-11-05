import { baseIconConfigs } from '../../constants';

export function IconCloseCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.2 0A5.8 5.8 0 1 0 2.2 8a5.8 5.8 0 0 0 11.6 0m-3.225 2.298L8.65 8l1.925-2.298a.2.2 0 0 0-.154-.328h-.87L8 7.225 6.449 5.374h-.87a.2.2 0 0 0-.154.328L7.35 8l-1.925 2.298a.2.2 0 0 0 .154.328h.755a.25.25 0 0 0 .191-.089L8 8.777l1.475 1.76a.25.25 0 0 0 .191.09h.755a.2.2 0 0 0 .154-.329" />
    </svg>
  );
}
