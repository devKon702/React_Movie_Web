import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", duration = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [initializeValue, duration]);
  return debounceValue;
}
