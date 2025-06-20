import { useState, useEffect } from 'react';
import type { UseDebounceOptions } from '@/types';

export function useDebounce<T>(
  value: T,
  options: UseDebounceOptions
): T {
  const { delay, leading = false, trailing = true } = options;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (leading && debouncedValue !== value) {
      setDebouncedValue(value);
    } else if (trailing) {
      timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, delay, leading, trailing, debouncedValue]);

  return debouncedValue;
} 