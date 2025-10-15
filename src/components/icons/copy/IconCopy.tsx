import { baseIconConfigs } from '../constants';

export function IconCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.422 11.203h.978V2.93H5.126v.985h-1.2V2.58q0-.352.25-.601.248-.25.6-.25h8.974q.352 0 .601.25.249.249.249.6v8.974q0 .352-.249.601-.249.25-.601.25h-1.328v1.084q0 .352-.25.601-.248.25-.6.25H2.849q-.352 0-.6-.25-.25-.249-.25-.6V4.765q0-.352.25-.601.248-.25.6-.25h8.723q.352 0 .6.25.25.249.25.6zm-1.2 1.935H3.199V5.116h8.023z"
      />
    </svg>
  );
}
