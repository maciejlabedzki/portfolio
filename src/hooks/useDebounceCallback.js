import { useCallback, useRef } from 'react';

const useDebounceCallback = (callback, timeout) => {
  const debounceTimeout = useRef();
  const debouncedCallback = useCallback(
    (...params) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      if (timeout && timeout > 0) {
        debounceTimeout.current = setTimeout(
          () => callback(...params),
          timeout,
        );
      } else {
        callback(...params);
      }
    },
    [callback, timeout],
  );

  return debouncedCallback;
};

export default useDebounceCallback;
