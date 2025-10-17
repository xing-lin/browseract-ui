import { baseIconConfigs } from '../../constants';

export function IconDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.218 3.864v-1.53q0-.352.25-.6.248-.25.6-.25h5.864q.352 0 .6.25.25.248.25.6v1.53h2.953c.146 0 .265.118.265.265v.67a.265.265 0 0 1-.265.265h-1.341v.006l-.484 9.009a.5.5 0 0 1-.5.473H3.607a.5.5 0 0 1-.5-.472l-.499-9.016H1.265A.265.265 0 0 1 1 4.798v-.67c0-.146.119-.264.265-.264zm6.364-.017H5.418V2.684h5.164zm-6.313 9.505L3.81 5.07h8.38l-.444 8.282z"
      />
    </svg>
  );
}
