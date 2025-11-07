import { cn } from '@/utils';
import { IconCheckCircleFilled } from '../icons/solos/check/IconCheckCircleFilled';
import { IconInfoCircleFilled } from '../icons/solos/info/IconInfoCircleFilled';
import { IconExclamationCircleFilled } from '../icons/solos/exclamation/IconExclamationCircleFilled';
import { IconCloseCircleFilled } from '../icons/solos/close/IconCloseCircleFilled';

export type StatusIconType = 'success' | 'info' | 'warning' | 'error';

export interface StatusIconProps {
  type: StatusIconType;
  className?: string;
}

const iconMap = {
  success: IconCheckCircleFilled,
  info: IconInfoCircleFilled,
  warning: IconExclamationCircleFilled,
  error: IconCloseCircleFilled,
};

const colorMap = {
  success: 'text-(--color-success)',
  info: 'text-(--color-info)',
  warning: 'text-(--color-warning)',
  error: 'text-(--color-error)',
};

const labelMap = {
  success: 'Success',
  info: 'Info',
  warning: 'Warning',
  error: 'Error',
};

export function StatusIcon({ type, className }: StatusIconProps) {
  const Icon = iconMap[type];

  return (
    <span className={cn('text-[22px]', colorMap[type], className)}>
      <Icon />
      <span className="sr-only">{labelMap[type]}</span>
    </span>
  );
}
