import { cn } from '@/utils';
import {
  Tabs as TabsUI,
  TabsList as TabListUI,
  TabsTrigger as TabsTriggerUI,
  TabsContent as TabsContentUI,
} from '../ui/tabs';

export interface TabsProps {
  options: {
    label: React.ReactNode;
    value: string;
    children: React.ReactNode;
  }[];
  className?: string;
  type?: 'default' | 'primitive';
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  options,
  className,
  type = 'default',
  value,
  onValueChange,
}: TabsProps) {
  if (!Array.isArray(options) || options.length === 0) {
    return null;
  }

  return (
    <TabsUI
      defaultValue={options[0].value}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      <TabListUI
        className={cn({
          'bg-[#F5F5F5]': type === 'default',
        })}
      >
        {options.map((option) => (
          <TabsTriggerUI
            key={option.value}
            value={option.value}
            className={cn({
              'text-(--color-text-secondary) data-[state=active]:bg-white data-[state=active]:text-(--color-text) data-[state=active]:shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_1px_3px_0_rgba(0,0,0,0.1)]':
                type === 'default',
            })}
          >
            {option.label}
          </TabsTriggerUI>
        ))}
      </TabListUI>
      {options.map((option) => (
        <TabsContentUI
          key={option.value}
          value={option.value}
        >
          {option.children}
        </TabsContentUI>
      ))}
    </TabsUI>
  );
}
