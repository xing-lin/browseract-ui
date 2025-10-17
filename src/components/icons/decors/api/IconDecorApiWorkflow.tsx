import { decorIconConfigs } from '../../constants';
import SvgDecorApiWorkflow from './api-workflow.svg';

export function IconDecorApiWorkflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <SvgDecorApiWorkflow
      {...decorIconConfigs}
      {...props}
    />
  );
}
