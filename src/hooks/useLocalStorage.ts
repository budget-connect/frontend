import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

type DefaultValueType<T> = T | (() => T);

function useLocalStorage<T>(
  key: string,
  defaultValue: DefaultValueType<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const cookies = parseCookies();
    const cookieValue = cookies[key];
    if (cookieValue) {
      return JSON.parse(cookieValue);
    }

    if (typeof defaultValue === 'function') {
      return (defaultValue as Function)();
    } else {
      return defaultValue as T;
    }
  });

  useEffect(() => {
    setCookie(null, key, JSON.stringify(value), {
      maxAge: 365 * 24 * 60 * 60, // Set an appropriate expiration time
      path: '/', // Specify the path where the cookie is valid
    });
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
