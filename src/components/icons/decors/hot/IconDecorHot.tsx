import { decorIconConfigs } from '../../constants';
import SvgDecorHot from './hot.svg';

export function IconDecorHot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <SvgDecorHot
      {...decorIconConfigs}
      {...props}
    />
  );
}
