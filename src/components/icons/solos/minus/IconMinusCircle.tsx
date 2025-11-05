import { baseIconConfigs } from '../../constants';

export function IconMinusCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.2 0A5.8 5.8 0 1 0 2.2 8a5.8 5.8 0 0 0 11.6 0M5 7.653v.694q0 .05.02.097.019.046.054.082.036.035.082.055t.097.019h5.494q.05 0 .097-.02.046-.019.082-.054.035-.036.055-.082T11 8.347v-.694q0-.05-.02-.097-.019-.046-.054-.082-.036-.035-.082-.055t-.097-.019H5.253q-.05 0-.097.02-.046.019-.082.054-.035.036-.055.082T5 7.653" />
    </svg>
  );
}
