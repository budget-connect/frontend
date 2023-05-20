import '@/styles/globals.css';

import { Flowbite } from 'flowbite-react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // additional useState required as the code sample in docs don't work
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  return (
    <SessionProvider session={session}>
      <Flowbite
        theme={{
          dark: isDarkMode,
        }}
      >
        <Component {...pageProps} />
      </Flowbite>
    </SessionProvider>
  );
}
