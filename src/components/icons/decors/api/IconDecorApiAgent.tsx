import { decorIconConfigs } from '../../constants';
import SvgDecorApiAgent from './api-agent.svg';

export function IconDecorApiAgent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <SvgDecorApiAgent
      {...decorIconConfigs}
      {...props}
    />
  );
}
