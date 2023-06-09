import '@/styles/globals.css';

import { BudgetsProvider } from '@/contexts/BudgetContext';
import { Flowbite } from 'flowbite-react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // additional useState required as the code sample in docs don't work
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   setIsDarkMode(localStorage.getItem('theme') === 'dark');
  // }, []);

  return (
    <SessionProvider session={session}>
      <Flowbite
      // theme={{
      //   dark: isDarkMode,
      // }}
      >
        <BudgetsProvider>
          <Component {...pageProps} />
        </BudgetsProvider>
      </Flowbite>
    </SessionProvider>
  );
}
