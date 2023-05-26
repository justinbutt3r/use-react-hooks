import { useRef, useEffect } from "react";

// can take in any value
export default function usePrevious(value: any) {
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
