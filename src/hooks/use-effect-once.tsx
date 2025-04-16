import { useEffect } from 'react';

export const useEffectOnce = (effect: () => void | (() => void)) => {
  useEffect(() => {
    const cleanup = effect();
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
