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
    childrenClassName?: string;
    labelClassName?: string;
  }[];
  className?: string;
  type?: 'default' | 'primitive' | 'card' | 'underline';
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
      className={cn(
        'gap-0',
        {
          'mr-auto': type === 'underline',
        },
        className,
      )}
    >
      <TabListUI
        className={cn('w-full', {
          'bg-[#F5F5F5]': type === 'default',
          'justify-start gap-6 rounded-none border-b border-(--color-border) bg-transparent p-0':
            type === 'underline',
          'justify-start gap-0.5 rounded-none border-b border-(--color-border) bg-transparent px-6 py-0':
            type === 'card',
        })}
      >
        {options.map((option) => {
          const { value, label, labelClassName } = option;
          return (
            <TabsTriggerUI
              key={value}
              value={value}
              className={cn(
                'font-normal text-(--color-text-secondary) data-[state=active]:font-medium data-[state=active]:text-(--color-text)',
                {
                  'data-[state=active]:bg-white data-[state=active]:shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_1px_3px_0_rgba(0,0,0,0.1)]':
                    type === 'default',
                  'h-[calc(100%+2px)] flex-none rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-1 shadow-none data-[state=active]:border-b-(--tabs-underline-border-active) data-[state=active]:shadow-none':
                    type === 'underline',
                },
                {
                  'h-[calc(100%+2px)] flex-none rounded-none rounded-t-md border border-(--color-border) bg-(--tabs-card-bg) px-4 shadow-none data-[state=active]:border-b-(--tabs-card-bg-active) data-[state=active]:bg-(--tabs-card-bg-active) data-[state=active]:font-normal data-[state=active]:text-(--tabs-card-text-active) data-[state=active]:shadow-none':
                    type === 'card',
                },
                labelClassName,
              )}
            >
              {label}
            </TabsTriggerUI>
          );
        })}
      </TabListUI>
      {options.map((option) => {
        const { value, children, childrenClassName } = option;
        return (
          <TabsContentUI
            key={value}
            value={value}
            className={cn(
              'pt-6',
              {
                'p-6': type === 'card',
              },
              childrenClassName,
            )}
          >
            {children}
          </TabsContentUI>
        );
      })}
    </TabsUI>
  );
}
