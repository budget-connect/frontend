import { ReactNode } from 'react';
import Header from './Header';
import Head from 'next/head';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Budget Connect</title>
      </Head>
      <Header />
      <main className="px-4 flex-col items-center justify-between min-h-screen mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
