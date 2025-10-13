import { baseIconConfigs } from '../../constants';

export interface IconMenuTemplateProps extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}

export function IconMenuTemplate({
  active = false,
  ...rest
}: IconMenuTemplateProps) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...rest}
    >
      <title>Menu Template</title>

      <rect
        data-hover="green"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="6"
        height="3"
        x="7.5"
        y="10.5"
        rx=".5"
      />
      <rect
        data-hover="green"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-green)' : 'currentColor'}
        width="3"
        height="4"
        x="4.5"
        y="2.5"
        rx=".5"
      />
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="6"
        height="8"
        x="7.5"
        y="2.5"
        rx=".5"
      />
      <rect
        data-hover="black"
        data-render="stroke"
        stroke={active ? 'var(--icon-fill-active-black)' : 'currentColor'}
        width="5"
        height="7"
        x="2.5"
        y="6.5"
        rx=".5"
      />
    </svg>
  );
}
