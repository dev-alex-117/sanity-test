import { useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, (nextValue?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (nextValue?: boolean) => {
    setValue((prev) => typeof nextValue === 'boolean' ? nextValue : !prev);
  };

  return [value, toggle] as const;
};
