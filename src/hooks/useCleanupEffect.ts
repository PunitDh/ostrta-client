/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export default function useCleanupEffect(
  callback: () => void,
  dependencies: any[] = []
) {
  const mounted = useRef(true);

  useEffect(() => {
    if (mounted.current) {
      callback();
    }
    return () => {
      mounted.current = false;
    };
  }, dependencies);
}
