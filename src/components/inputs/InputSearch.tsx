import { InputHTMLAttributes } from 'react';
import { IconSearch } from '../icons/solos/search/IconSearch';
import {
  InputGroup as InputGroupUI,
  InputGroupInput as InputGroupInputUI,
  InputGroupAddon as InputGroupAddonUI,
} from '../ui/input-group';
import { cn } from '@/utils';
import { IconLoading } from '../icons/solos/loading/IconLoading';

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  maxWidth?: number | string;
  loading?: boolean;
}

export function InputSearch({
  wrapperClassName,
  className,
  maxWidth,
  placeholder = 'Search',
  loading = false,
  disabled,
  ...props
}: InputSearchProps) {
  return (
    <InputGroupUI
      className={cn(
        'h-8 rounded-lg border-(--input-search-border) bg-(--input-search-bg)',
        wrapperClassName,
      )}
      style={{ maxWidth }}
    >
      <InputGroupAddonUI className="text-(--color-text-quaternary)">
        <IconSearch />
      </InputGroupAddonUI>
      <InputGroupInputUI
        type="search"
        placeholder={placeholder}
        className={cn(
          'text-(--color-text) placeholder:text-(--color-text-quaternary)',
          className,
        )}
        disabled={disabled || loading}
        {...props}
      />
      {loading ? (
        <InputGroupAddonUI
          align="inline-end"
          className="text-(--color-text-quaternary)"
        >
          <IconLoading />
        </InputGroupAddonUI>
      ) : null}
    </InputGroupUI>
  );
}
