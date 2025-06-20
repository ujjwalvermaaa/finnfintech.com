import { useState, useEffect } from 'react';
import type { UseLocalStorageOptions } from '@/types';

export function useLocalStorage<T>(
  key: string,
  options: UseLocalStorageOptions<T>
) {
  const { defaultValue, serialize = JSON.stringify, deserialize = JSON.parse } = options;

  // Get initial value from localStorage or use default
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      if (value === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, serialize(value));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value, serialize]);

  return [value, setValue] as const;
} 