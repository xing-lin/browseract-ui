import { baseIconConfigs } from '../constants';

export function IconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" />
      <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
    </svg>
  );
}
