import React from "react";
export function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options = { leading: false }
) {
  const [value, setValue] = React.useState(defaultValue);
  const timeoutRef = React.useRef<number>();
  const leadingRef = React.useRef(true);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current);
  React.useEffect(() => clearTimeout, []);

  const debouncedSetValue = (newValue: T) => {
    clearTimeout();
    if (leadingRef.current && options.leading) {
      setValue(newValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }
    leadingRef.current = false;
  };

  return [value, debouncedSetValue] as const;
}
