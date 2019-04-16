import { useEffect, useRef } from 'react';

// Simple hook to keep track of a previous value.
// See useDeepCompareEffect for example usage.
export function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
