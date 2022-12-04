import { useEffect, EffectCallback, DependencyList, useRef } from 'react';

export const useInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  const initialRenderRef = useRef(true);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
    } else {
      effect();
    }
  }, deps);
};
