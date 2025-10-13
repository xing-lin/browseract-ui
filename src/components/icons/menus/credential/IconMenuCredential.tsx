import { baseIconConfigs } from '../../constants';

export interface IconMenuCredentialProps extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}

export function IconMenuCredential({
  active = false,
  ...rest
}: IconMenuCredentialProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <title>Menu Credential</title>

      <path
        data-hover="black"
        fill={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        d="M13.99 3.427V8.41a6.7 6.7 0 0 1-.16 1.832c-.59 1.976-2.089 3.12-3.788 3.987q-.652.32-1.335.572a3.4 3.4 0 0 1-.632.2 2.1 2.1 0 0 1-.78-.206 12.6 12.6 0 0 1-1.825-.825c-1.58-.93-2.872-1.993-3.372-4.01a6.7 6.7 0 0 1-.088-1.501v-5.71a1.3 1.3 0 0 1 .033-.422.54.54 0 0 1 .21-.244Q2.458 2 2.68 1.98l.889-.164L7.984 1q.286.013.56.094l1.011.187 2.905.539.86.16.356.07c.1.042.185.114.243.206.122.201.07.842.07 1.171M12.987 7.49V2.934l-4.953-.918-5.023.918V7.49c0 .913-.054 1.928.164 2.62.425 1.349 1.468 2.183 2.572 2.858q.802.473 1.675.8.292.132.603.206l.567-.206a8.4 8.4 0 0 0 1.127-.506c.213-.125.431-.223.636-.352 1.118-.697 2.092-1.554 2.512-2.951.192-.644.12-1.645.12-2.468"
      />
      <path
        data-hover="green"
        fill={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        fillRule="evenodd"
        d="M5.058 7.322a1.84 1.84 0 0 1 2.594-2.583c.746.572.957 1.606.494 2.424l.375.374.976-.972a.47.47 0 0 1 .662.667l-.977.971.683.683.32-.32a.468.468 0 0 1 .662.662l-.326.325.33.33a.461.461 0 0 1-.197.776.48.48 0 0 1-.453-.126L7.487 7.819a1.88 1.88 0 0 1-2.429-.497m.839-.434a.921.921 0 0 1 1.285-1.323c.366.36.373.95.014 1.318a.923.923 0 0 1-1.3.005"
      />
    </svg>
  );
}
