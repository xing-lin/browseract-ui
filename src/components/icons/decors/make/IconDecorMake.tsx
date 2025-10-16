import { decorIconConfigs } from '../../constants';
import SvgDecorMake from './make.svg';

export function IconDecorMake(props: React.SVGProps<SVGSVGElement>) {
  return (
    <SvgDecorMake
      {...decorIconConfigs}
      {...props}
    />
  );
}
